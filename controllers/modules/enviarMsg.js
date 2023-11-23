const axios = require('axios');

const wid = "116309021506789";
const urlApi = "https://graph.facebook.com/v17.0/" + wid + "/messages";
const authBarrer = "Bearer EAALdi7EPYDUBO2QXEc75Cni3jPbp6Nw9bJtRpbKTEuNc2HdhO65ql59UJH5X7KrQbuDb68TD6BOgVZC9i1y0YlEcHySdcCLeI9NZBNgW7J74YrIDqOodqTbWGk3w8PiQqBDULQm2r0TCJWW4xqPcHJ0vXnqnjsPw4fEg1nYvvaSeQ8nK3JYaA8le87t1QTDGUZB8fPvpdr7a1ZB0NRbyCgZDZD"

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