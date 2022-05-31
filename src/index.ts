import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3001
const server = express();

server.use('/', (req, res) => {
    res.json({ ok: 'ok' })
})

server.listen(port, () => {
    console.log("Server started...")
})