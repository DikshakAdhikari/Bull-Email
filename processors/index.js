
import { createClient } from 'redis'

console.log("destination retrieved");

const client= createClient()

await client.connect();
client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', err => console.log('Redis Client Error', err));
