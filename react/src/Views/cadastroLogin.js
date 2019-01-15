import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import InputCustomValidation from '../Components/ComponentsCustom/InputCustomValidation';
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Button from '../Components/ComponentsCustom/ButtonAcessLogin'
import './../assets/css/login.css'

class CadastroLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            nomeUsuario: null,
            senha: null,
            confirmarSenha: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }

    handleInputChange(e) {
        const target = e.target.type
        const value = e.target.value
        const chkPassword = $(e.target).attr("id").indexOf("senhaCadastro") === 0 ? true : false
        $("#errorCadastro").html("")

        switch (target) {
            case "email":
                this.setState({ email: value })
                break
            case "text":
                this.setState({ nomeUsuario: value })
                break
            default:
                if (chkPassword)
                    this.setState({ senha: value })
                else
                    this.setState({ confirmarSenha: value })
                return
        }
    }

    sendForm(e) {
        e.preventDefault();
        if (this.state.senha != this.state.confirmarSenha) {
            $("#senhaCadastro,#ConfirmarSenhaCadastro").addClass("validationError")
            $("#errorCadastro").html("Erro ao confirmar senhas.")
            $("#boxMsgError").addClass("msgErro")
        }
    }

    render() {
        return (
            <section className="container " id="login">
                <header className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </header>
                <form id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">

                        <InputCustomValidation id="emailCadastro" email={this.props.email} type="Email" placeholder="Email de Cadastro" onChange={this.handleInputChange} />
                        <InputCustomValidation onChange={this.handleInputChange} id="nomeUsuario" nomeUsuario={this.props.nomeUsuario} type="text" placeholder="Nome de Usuario" />
                        <InputCustomValidation onChange={this.handleInputChange} id="senhaCadastro" value={this.props.senha} type="password" placeholder="Senha" />
                        <InputCustomValidation onChange={this.handleInputChange} id="ConfirmarSenhaCadastro" value={this.props.confirmarSenha} type="password" placeholder="Confirmar Senha" />
                        
                        <Button id="btn" onClick={this.sendForm}>{'Cadastrar'}</Button>
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
            </section>
        );
    }
}

export default CadastroLogin;