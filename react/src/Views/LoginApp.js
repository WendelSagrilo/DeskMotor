import React, {Component} from 'react'
import $ from 'jquery'
import logo from '../assets/img/logo.png'
import FacebookLogin from './../Components/FacebookLogin'
import GoogleLogin from './../Components/GoogleLogin'
import InputCustomValidation, {validationValues} from './../Components/ComponentsCustom/InputCustomValidation'
import {Link, Route} from 'react-router-dom'


export default class LoginApp extends Component {
    constructor() {
        super();
        this.state =
            {
                Email: null,
                Senha: null,
            };
    };

    componentDidMount() {
        $.ajax({
            url: "http://localhost:4000/dados",
            type: 'get',
            contentType: "application/json; charset=utf-8",
        }
        ).done(function (result) {
            console.log(result);
        }).fail(error => (error))
    }


    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin"/>
                </div>
                <form id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">
                        <InputCustomValidation id="emailLogin" ke={enabledBtn} type="Email" placeholder="Email"/>
                        <InputCustomValidation id="senhaLogin" blur={enabledBtn} type="password" placeholder="Senha"/>
                        <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                            <button id="loginBtn" href="/" className="col-12 btn btn-login shine">Entrar</button>
                            <br/>
                            <GoogleLogin/>
                            <br/>
                            <FacebookLogin/>
                        </div>
                    </section>
                </form>
                <div className=" nav-bottom-login d-flex justify-content-around ">
                    <div>
                        <Link className="link" to="/Cadastre-se">Inscrever-se</Link>
                    </div>

                    <div>
                        <Link className="link" to="/RedefinirSenha">Redefinir Senha</Link>
                    </div>
                </div>
            </div>
        );
    }
}

function enabledBtn(element) {
    var emailValid = validationValues($("#emailLogin"));
    var passwordValid = validationValues($("#senhaLogin"));
    var elementFocus = $(element).is(":focus");


    if (passwordValid && emailValid && !elementFocus)
        $("#loginBtn").removeAttr('disabled')
    else
        $("#loginBtn").attr('disabled', true)

}



