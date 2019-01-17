const dataBase = require('./../Connections/connectionDB')()
let routes = {};
let server;
const sendEmail = require('./../Emails/confirmacaoCadastro')()

routes.configuraRotas = function (express) {
    server = express;
    routes.consultaDadosMotoboy();
    routes.EnviarEmailConfirmacaoCadastro();
};

routes.consultaDadosMotoboy = function () {
    server.get('/dados', async function (request, response) {
        try {
            const dados = await dataBase.any("SELECT * FROM motoboy")
            response.json(dados)
        } catch (ex) {
            console.log("Erro ao efetuar a consulta " + ex)
        }
    });
};

var i = 1;
routes.EnviarEmailConfirmacaoCadastro = function () {
    server.get('/emailConfirmacaoCadastro', async function (request, response) {
        try {
            mailOptions = {
                from: 'wendelsagrilo@gmail.com',
                to: request.query.email,
                subject: request.query.title,
                text: request.query.text,
            };
            sendEmail.sendMail(mailOptions, function (error, info) {
                var email = null;
                if (error) {
                    console.log(error.message);
                    email = false;
                    response.json(email)
                } else {
                    console.log(info);
                    email = true;
                    response.json(email)
                }
            });
        } catch (ex) {
            console.log(ex)
        }
    });
}

module.exports = routes;


