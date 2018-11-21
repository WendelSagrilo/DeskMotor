import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import InputCustomValidation from '../Components/ComponentsCustom/InputCustomValidation';
import { Link } from 'react-router-dom'


class CadastroLogin extends Component {

    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </div>
                <form id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">

                        <InputCustomValidation id="emailCadastro" type="Email" placeholder="Email de Cadastro" />
                        <InputCustomValidation id="nomeUsuario" type="text" placeholder="Nome de Usuario" />
                        <InputCustomValidation id="senhaCadastro" type="password" placeholder="Senha" />
                        <InputCustomValidation id="ConfirmarSenhaCadastro" type="password" placeholder="Confirmar Senha" />

                        <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                            <a id="loginBtn" href="/" className="col-12 btn btn-login shine" >Cadastrar</a>
                        </div>
                    </section>
                </form>
                <div className=" nav-bottom-login d-flex justify-content-around ">
                    <div>
                        <Link to="/" className="link">Login</Link>
                    </div>
                    <div>
                        <Link to="/RedefinirSenha" className="link">Redefinir Senha</Link>
                    </div>
                  
                </div>
            </div>

        );
    }
}

export default CadastroLogin;