import { Router } from "express";
import { ControladorDeVeiculos } from "../../api/veiculos";
import { AdicionarOuAtualizarVeiculoManipuladorDeComando } from "../../aplicacao/veiculos/adicionar-ou-atualizar-veiculo";
import { PegarTodosVeiculosManipuladorDeConsulta } from "../../aplicacao/veiculos/pegar-todos-veiculos";
import { PegarUmVeiculoManipuladorDeConsulta } from "../../aplicacao/veiculos/pegar-um-veiculo";
import { ChecadorDeVeiculoChassiServico, ChecadorDeVeiculoIdServico, ChecadorDeVeiculoPlacaServico, ChecadorDeVeiculoRenavamServico } from "../../aplicacao/veiculos/servicos";
import { VeiculoNaMemoriaRepositorio } from "../repositorios";

export class RoteadorDeVeiculosFabrica {
    static create() {
        const roteador = Router()
        const repositorio = new VeiculoNaMemoriaRepositorio()
        const checadorDeId = new ChecadorDeVeiculoIdServico(repositorio)
        const checadorDePlaca = new ChecadorDeVeiculoPlacaServico(repositorio)
        const checadorDeChassi = new ChecadorDeVeiculoChassiServico(repositorio)
        const checadorDeRenavam = new ChecadorDeVeiculoRenavamServico(repositorio)
        const adicionarOuAtualizarVeiculoManipuladorDeComando =
            new AdicionarOuAtualizarVeiculoManipuladorDeComando(
                repositorio,
                checadorDeId,
                checadorDePlaca,
                checadorDeChassi,
                checadorDeRenavam)
        const pegarTodosVeiculosManipuladorDeConsulta = new PegarTodosVeiculosManipuladorDeConsulta(repositorio)
        const pegarUmVeiculoManipuladorDeConsulta = new PegarUmVeiculoManipuladorDeConsulta(repositorio)
        const controller = new ControladorDeVeiculos(
            adicionarOuAtualizarVeiculoManipuladorDeComando,
            pegarTodosVeiculosManipuladorDeConsulta,
            pegarUmVeiculoManipuladorDeConsulta)

        roteador.post('/veiculos', controller.post.bind(controller))
        roteador.get('/veiculos', controller.getAll.bind(controller))
        roteador.get('/veiculos/:id', controller.getOne.bind(controller))

        return roteador
    }
}