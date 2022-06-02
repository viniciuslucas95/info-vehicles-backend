import { Router } from "express";
import { ControladorDeVeiculos } from "../../api/veiculos";
import { AdicionarVeiculoManipuladorDeComando } from "../../aplicacao/veiculos/adicionar-veiculo";
import { AtualizarVeiculoManipuladorDeComando } from "../../aplicacao/veiculos/atualizar-veiculo";
import { DeletarVeiculoManipuladorDeComando } from "../../aplicacao/veiculos/deletar-veiculo";
import { PegarTodosVeiculosManipuladorDeConsulta } from "../../aplicacao/veiculos/pegar-todos-veiculos";
import { PegarUmVeiculoManipuladorDeConsulta } from "../../aplicacao/veiculos/pegar-um-veiculo";
import {
    ChecadorDeVeiculoChassiServico,
    ChecadorDeVeiculoIdServico,
    ChecadorDeVeiculoPlacaServico,
    ChecadorDeVeiculoRenavamServico
} from "../../aplicacao/veiculos/servicos";
import {
    VeiculoNaMemoriaRepositorio,
    VeiculoNoJsonServerRepositorio,
    VeiculoMapper
} from "../repositorios";

export class RoteadorDeVeiculosFabrica {
    static create() {
        const roteador = Router()
        const repositorio = process.env.NODE_ENV === 'test' ?
            new VeiculoNaMemoriaRepositorio() :
            new VeiculoNoJsonServerRepositorio(new VeiculoMapper())
        const checadorDeId = new ChecadorDeVeiculoIdServico(repositorio)
        const checadorDePlaca = new ChecadorDeVeiculoPlacaServico(repositorio)
        const checadorDeChassi = new ChecadorDeVeiculoChassiServico(repositorio)
        const checadorDeRenavam = new ChecadorDeVeiculoRenavamServico(repositorio)
        const adicionarVeiculoManipuladorDeComando =
            new AdicionarVeiculoManipuladorDeComando(
                repositorio,
                checadorDeId,
                checadorDePlaca,
                checadorDeChassi,
                checadorDeRenavam)
        const atualizarVeiculoManipuladorDeComando =
            new AtualizarVeiculoManipuladorDeComando(repositorio)
        const deletarVeiculoManipuladorDeComando =
            new DeletarVeiculoManipuladorDeComando(repositorio)
        const pegarTodosVeiculosManipuladorDeConsulta =
            new PegarTodosVeiculosManipuladorDeConsulta(repositorio)
        const pegarUmVeiculoManipuladorDeConsulta =
            new PegarUmVeiculoManipuladorDeConsulta(repositorio)
        const controller = new ControladorDeVeiculos(
            adicionarVeiculoManipuladorDeComando,
            atualizarVeiculoManipuladorDeComando,
            deletarVeiculoManipuladorDeComando,
            pegarTodosVeiculosManipuladorDeConsulta,
            pegarUmVeiculoManipuladorDeConsulta)

        roteador.post('/veiculos', controller.post.bind(controller))
        roteador.patch('/veiculos/:id', controller.patch.bind(controller))
        roteador.delete('/veiculos/:id', controller.delete.bind(controller))
        roteador.get('/veiculos', controller.getAll.bind(controller))
        roteador.get('/veiculos/:id', controller.getOne.bind(controller))

        return roteador
    }
}