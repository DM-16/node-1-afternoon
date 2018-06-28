let messages = []; //array to hold the messages
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time }); //pushes new message object into the messages array
        id++; //id increments by one after a new message object is created
        res.status(200).send(messages); //returns the entire messages array
    },
    read: (req, res) => {
        res.status(200).send(messages); //returns the entire messages array
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        message[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(mesages); //returns the entire messages array
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message.id == deleteID);
        messages.splice(messageIndex, 1); //remove one element from messageIndex
        req.status(200).send(messages); //returns the entire messages array
    }
}