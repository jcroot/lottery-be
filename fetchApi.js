const axios =  require('axios');

const ApiManagement= 'http://186.122.249.38:8080/lottery';

const prospectByTicket = (ticket_number) => {
    const apiURL = `${ApiManagement}/lottery/prospect-by-ticket-number/${ticket_number}`;

    return axios
        .get(apiURL)
        .then((res) => {
            return {status: 200, data: res.data};
        })
        .catch((err) => {
            return {data: err.response.data, status: err.response.status};
        });
}

const contestRightNow = (payload) => {
    const apiURL = `${ApiManagement}/lottery/contest-right-now`;

    console.log(payload);
    return axios
        .post(apiURL, payload)
        .then((res) => {
            return {status: 200, data: res.data};
        })
        .catch((err) => {
            return {data: err.response.data, status: err.response.status};
        });
}

exports.prospectByTicket = prospectByTicket;
exports.contestRightNow = contestRightNow;