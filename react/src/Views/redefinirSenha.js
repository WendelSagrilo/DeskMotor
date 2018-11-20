import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import InputCustomValidation from '../Components/ComponentsCustom/InputCustomValidation';
import { Link } from 'react-router-dom'


class RedefinirSenha extends Component {

    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </div>
                <form id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">

                        <InputCustomValidation id="emailAntigo" type="password" placeholder="Senha Antiga" />
                        <InputCustomValidation id="senhaNova" type="password" placeholder="Senha Nova" />
                        <InputCustomValidation id="confirmarSenha" type="password" placeholder="Confirmar Senha" />

                        <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                            <a id="loginBtn" href="/" className="col-12 btn btn-login shine" >Redefinir Senha</a>
                        </div>
                    </section>
                </form>
                <div className=" nav-bottom-login d-flex justify-content-around ">
                    <div>
                        <Link to="/Cadastre-se" className="link">Inscrever-se</Link>
                    </div>

                    <div>
                        <Link to="/" className="link">Login</Link>
                    </div>

                </div>
            </div>

        );
    }
}

export default RedefinirSenha;