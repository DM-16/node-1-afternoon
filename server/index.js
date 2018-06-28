const express = require('express'); //server
const bodyParser = require('body-parser'); //middleware for parsing JSON
const mc = require(__dirname + '/controllers/messages_controller');
const messagesBaseUrl = "/api/messages";

const app = express(); //full express application being stored in app

//^gives us access to the listen method and several others

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const baseURL = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3000; //porting on localhost 3000
app.listen(port, () => () => { console.log(`Server listening on port ${port}`); });
//^template literal to contain the variable port
//^Express is listening on the port 
//and when the server starts it will console log "Server listening on port 3000"



