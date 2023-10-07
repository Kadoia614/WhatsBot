const user = require('../models/user');
const tratarMsg = require('./modules/tratarMsg');
const userSessions = {};


exports.getMsg = async (req, res) => {
    const reqType = req.method;
    const data = req.query;
    const dataTostring = JSON.stringify(data);

    user.create({ mensagem: dataTostring, type: reqType })
    try {
        res.send(data['hub.challenge']);
        // res.send("Deu Certo");
        console.log('A requisição foi do tipo ' + dataTostring)
    } catch {
        console.log('algo deu errado')
    }
}




exports.postMsg = async (req, res) => {
    const { value } = req?.body?.entry[0]?.changes[0]

    if (value?.messages) {
        const mensagemRecebida = value?.messages[0]?.text?.body;
        const usuario = value?.messages[0]?.from;

        if (!userSessions[usuario]) {
            // Iniciar uma nova sessão para o usuário
            userSessions[usuario] = { step: 1 };

            // Enviar a primeira mensagem
            responseMessage = 'Olá! Como posso ajudar?';
        } else {
            // Obter o passo atual da sessão do usuário
            const currentStep = userSessions[usuario].step;
            responseMessage = processMessage(mensagemRecebida, currentStep);

            userSessions[usuario].step = currentStep + 1
        
        }

        tratarMsg.Enviar(usuario, responseMessage);

        res.status(200).end();



    } else {
        res.status(200).send("okay")
    }
};


function processMessage(message, step) {
    let response;
  
    switch (step) {
      case 1:
        response = 'Ótimo! Qual é o seu nome?';
        break;
      case 2:
        response = `Olá, ${message}! Como posso ajudar você hoje?`;
        break;
      case 3:
        response = 'Estou aqui para responder às suas perguntas. O que você gostaria de saber?';
        break;
      default:
        response = 'Desculpe, não entendi. Por favor, tente novamente.';
        break;
    }
  
    return response;
  }