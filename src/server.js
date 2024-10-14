import express from 'express';

const server = express();
const port = 157;

server.use(express.json());

server.get('/', (_, res) => {
    res.send("acumalaka");
});

server.listen(port, () => {
    console.log('well, we running');

});