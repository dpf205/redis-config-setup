'use strict';

// Redis Labs config
let redisLabsPort = 'enter port number';
let redisLabsPass ='enter password';
let redisLabsEndpoint = 'redis-<Port>.c13.us-east-1-3.ec2.cloud.redislabs.com'

let redis = require('redis');

let client = redis.createClient(redisLabsPort, redisLabsEndpoint, {no_ready_check: true});

client.auth(redisLabsPass, function (err) {
    if (err) throw err;
});


client.on('connect', function () {
    console.log('Connected to Redis');
});

module.exports = client;
