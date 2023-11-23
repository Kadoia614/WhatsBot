exports.SelecionarEtapa = (message, step)=>{
  let resposta;
    
  switch (step) {
      case 1:
        resposta = 'Ótimo! Qual é o seu nome?';
        break;
      case 2:
        resposta = `Olá, ${message}! Como posso ajudar você hoje?`;
        break;
      case 3:
        resposta = 'Estou aqui para responder às suas perguntas. O que você gostaria de saber?';
        break;
      default:
        resposta = 'Desculpe, não entendi. Por favor, tente novamente.';
        break;
    }
    return resposta;
}