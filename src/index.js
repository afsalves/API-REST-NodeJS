const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json()); // entender quando passar um arquivo json
app.use(bodyParser.urlencoded ({extended: false})); // entender quando passar parametros via URL

require('./app/controllers/index')(app);

/*
req = dados da requisiçao, ex: parametros, token
res = objeto que envia resposta para o usurario quando ele acessa a rota

app.get('/', (req, res) => {
    res.send('OK');
}); */

app.listen(3000);
