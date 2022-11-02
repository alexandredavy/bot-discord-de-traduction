
/*
const{ Client, GatewayIntentBits} = require("discord.js");



const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready",() => {
    console.log("bot opérationnel");
});

client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log(message);

    if(message.content == "ping")
    {
        message.reply("pong");
    }
});

client.login("MTAzNzE1NDU2MzMzMDk0NTAyNQ.GdbC-W.Nwzh_qFUgf3Va_hZbyh5zK6YH8TmMrz49hm9hw");

--------------------------


const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

let key = "4e53c93a344f48f99e57a5a6a55daa4e";
let endpoint = "https://api.cognitive.microsofttranslator.com";
let location = "canadacentral";

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
        // location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'en',
        'to': ['fr', 'zu']
    },
    data: [{
        'text': "hello"
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4));
})
*/

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

let key = "4e53c93a344f48f99e57a5a6a55daa4e";
let endpoint = "https://api.cognitive.microsofttranslator.com";
let location = "canadacentral";

const{ Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready",() => {
    console.log("bot opérationnel");
});

client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log(message);

    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['fr', 'es']
        },
        data: [{
            'text': message.content
        }],
        responseType: 'json'
    }).then(function(response){
        message.reply(JSON.stringify(response.data, null, 4));
    })
});

client.login("MTAzNzE1NDU2MzMzMDk0NTAyNQ.GdbC-W.Nwzh_qFUgf3Va_hZbyh5zK6YH8TmMrz49hm9hw");