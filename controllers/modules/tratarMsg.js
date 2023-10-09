const axios = require('axios');
const { response } = require('express');

const wid = "116309021506789";
const urlApi = "https://graph.facebook.com/v17.0/" + wid + "/messages";
const authBarrer = "Bearer EAALdi7EPYDUBO3GnQra4ekCad8URMMHgaQgx64ZCtCceKQAIxDPE4jqrg5c3MexJ5FtY6UWGY3a7JwNRU5hZBIkOG4nQveI01ZAFDzvsD980FC4T75RK5BteMZAFPLZB3xtt0slRXwXurkabECQwjxjvo67ZAABhEq5AbSYKNq0ZAZCgo7qdi67MySM2NlmnmSZA2ZANFeezZCHj6aHVGI1WlsZD"


exports.SelecionarEtapa = (message, step)=>{
    
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


exports.Enviar = (user, message) => {
    axios.post(urlApi, {
        messaging_product: 'whatsapp',
        to: user,
        type: 'text',
        text: { body: message },
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authBarrer,
        },
    })
}