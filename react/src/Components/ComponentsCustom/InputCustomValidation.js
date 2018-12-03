import React from 'react';
import $ from 'jquery';

export default class InputCustomValidation extends React.Component {
    constructor(props){
        super();
        this.state = {email: props.email,
                      nomeUsuario: props.nomeUsuario,
                    };
    }

    render() {
        return (
            <div className="box-input d-flex flex-column align-items-center">
                <label id={"Rlbl" + this.props.id}></label>
                <input onChange={this.props.onChange} type={this.props.type} placeholder={this.props.placeholder} 
                value={this.props.value} className={this.props.className} id={this.props.id} 
                onKeyDown={this.props.onKeyDown} onFocus={this.labelUp} onBlur={this.labelDown} />
            </div>
        )
    }



    labelUp(e) {
        var element = $(e.target);
        var label = element.prev().text(element.attr('placeholder'));
        $(element).removeAttr('placeholder').removeClass('validationError');
        $(label).css({
            transform: 'translateY(-25px)',
            transition: "all .2s ease-out",
            fontWeight: "500",
            fontSize: "1em",
            color: 'white',
        });


    }

    labelDown(e) {
        var element = $(e.target);

        if (element.val() === '') {
            var label = element.prev();
            $(label).css({
                transform: 'translateY(0)',
                transition: "all .2s ease-out",
            });

            setTimeout(function () {
                element.attr('placeholder', label.text());
                label.text('');
            }, 200);

        } else
            validationValues(element);
    }

}

export function validationValues(element) {
    element = $(element);
    if (element.attr('type') === 'email' || element.attr('type') === 'Email') {
        var regexValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!regexValidation.test($(element).val()))
            $(element).addClass('validationError');
        else {
            $(element).removeClass('validationError');
        }
    } else if (element.attr('type') === 'password' || element.attr('type') === 'Password') {
        if ($(element).val().length <= 3)
            $(element).addClass('validationError');
        else
            $(element).removeClass('validationError');

    }

}
