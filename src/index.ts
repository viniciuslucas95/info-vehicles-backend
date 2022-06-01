import express, { json } from 'express';
import dotenv from 'dotenv';
import { RoteadorDeVeiculosFabrica } from './infraestrutura/fabricas';
import { VeiculoNaMemoriaRepositorio } from './infraestrutura/repositorios';

dotenv.config();

const port = process.env.PORT || 3001
const server = express();

server.use(json())
server.use('/', RoteadorDeVeiculosFabrica.create())

server.listen(port, () => {
    console.log("Server started...")
})