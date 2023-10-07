const axios = require('axios');
const { response } = require('express');

const wid = "116309021506789";
const urlApi = "https://graph.facebook.com/v17.0/" + wid + "/messages";
const authBarrer = "Bearer EAALdi7EPYDUBO9IF3b86pktulYnhvXTS8Shx3RdJB3sF9vd4HFn4K82ZC8XB0P5ZCCXZB0FogjvchYbvHSL3GPUQZAbCSPG0wIy5xZBdSmE3JgYWPw9vPkRBfwYLoPsw5LF8yTxTA6fluOgHovbM8LcigjAqtyLSeuc6rHR5Df54wERCnbCD6w9Ljetf6i66504JWULuZBMolczIVZCTCEZD"


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