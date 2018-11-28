import React, { Component } from 'react';
import { string } from 'prop-types';



export default class ButtonAccessLogin extends Component {

        render() {
        return(
            <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                <button id={this.props.id} onClick={this.props.onClick} className="col-12 btn btn-login shine">{this.props.children}</button>
            </div>
        )
    }

    prev(e){
        e.preventDefault;
    }
}
