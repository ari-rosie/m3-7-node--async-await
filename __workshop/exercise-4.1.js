const request = require('request-promise');
const json = require('body-parser/lib/types/json');


const getDadJoke = async () => {
    const reqObj = {
        headers:{"Accept" : "application/json"},
        uri: 'https://icanhazdadjoke.com/',
        json: true
    }
    try {
        const reqJoke = await request(reqObj);
        return reqJoke.joke;
    } catch(err) {
        console.log(err);
    }
}

getDadJoke().then(res => console.log((res)));