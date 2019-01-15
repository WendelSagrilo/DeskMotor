import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CadastroLogin from './Views/cadastroLogin';
import RedefinirSenha from './Views/redefinirSenha';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Cadastre-se" component={CadastroLogin} />
            <Route exact path="/RedefinirSenha" component={RedefinirSenha} />
        </Switch>
    </Router>
    
), document.getElementById('root'))


var html = document.querySelector('html');
var body = document.querySelector('body');
var root = document.querySelector('#root');
var htmlHeight = html.offsetHeight;
var deviceHeight = window.innerHeight;

if(htmlHeight < deviceHeight){
    html.style.height = deviceHeight + 'px';
    body.style.height = deviceHeight + 'px';
    root.style.height = deviceHeight + 'px';
    if(deviceHeight > 1000){
        root.style.display = 'flex';
        root.style.alignItems = 'center';

    }


}