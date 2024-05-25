
// import { createClient } from 'redis'

// console.log("destination retrieved");

// const client= createClient()

// await client.connect();
// client.on('connect', function() {
//     console.log('Redis client connected');
// });

// client.on('error', err => console.log('Redis Client Error', err));

const Queue= require('bull')

// const path = require("path");
// const { REDIS_URI, REDIS_PORT } = require("../config/constants");

const emailQueue = new Queue("emailQueue", {
  redis: { port: 6379, host: "127.0.0.1" },
});

console.log(emailQueue);