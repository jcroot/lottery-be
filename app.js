const express = require('express');
const app = express();
const cors = require('cors');

const config = require('./config.js')
const PORT = config.PORT;

const fetchAPI = require('./fetchApi.js');
const {prospectByTicket} = require("./fetchApi");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})

app.get('/lottery/lottery/prospect-by-ticket-number/:ticket_number', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    getProspectByTicket(req.params.ticket_number)
        .then((response) => {
            return res.status(response.status).json(response.data)
        });
})

let getProspectByTicket = async (ticket_number) => {
    return await fetchAPI.prospectByTicket(ticket_number);
}

app.post('/lottery/lottery/contest-right-now', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    contestRightNow(req.body)
        .then((response) => {
            return res.status(response.status).json(response.data)
        });
})

let contestRightNow = async (payload) => {
    return await fetchAPI.contestRightNow(payload);
}


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));