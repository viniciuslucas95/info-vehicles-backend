import { Request, Response } from 'express'
import { ManipuladorDeComando } from "../../aplicacao/configuracoes/comandos";
import { ManipuladorDeConsulta } from "../../aplicacao/configuracoes/consultas";
import { AdicionarOuAtualizarVeiculoComando, VeiculoDto as AdicionarOuAtualizarVeiculoDto } from "../../aplicacao/veiculos/adicionar-ou-atualizar-veiculo";
import { PegarTodosVeiculosConsulta, TodosVeiculosDto } from "../../aplicacao/veiculos/pegar-todos-veiculos";
import { VeiculoDto as PegarVeiculoDto, PegarUmVeiculoConsulta } from "../../aplicacao/veiculos/pegar-um-veiculo";

export class ControladorDeVeiculos {
    constructor(
        private readonly adicionarOuAtualizarVeiculoManipuladorDeComando: ManipuladorDeComando<AdicionarOuAtualizarVeiculoComando, AdicionarOuAtualizarVeiculoDto>,
        private readonly pegarTodosVeiculosManipuladorDeConsulta: ManipuladorDeConsulta<PegarTodosVeiculosConsulta, TodosVeiculosDto[]>,
        private readonly pegarUmVeiculoManipuladorDeConsulta: ManipuladorDeConsulta<PegarUmVeiculoConsulta, PegarVeiculoDto>
    ) { }

    async post(req: Request, res: Response) {
        try {
            const comando = new AdicionarOuAtualizarVeiculoComando(req.body.placa, req.body.chassi, req.body.renavam, req.body.modelo, req.body.marca, req.body.ano)
            const resultado = await this.adicionarOuAtualizarVeiculoManipuladorDeComando.manipular(comando)
            res.status(201).send(resultado)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const consulta = new PegarTodosVeiculosConsulta()
            const resultado = await this.pegarTodosVeiculosManipuladorDeConsulta.manipular(consulta)
            res.status(200).send(resultado)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const consulta = new PegarUmVeiculoConsulta(req.params.id)
            const resultado = await this.pegarUmVeiculoManipuladorDeConsulta.manipular(consulta)
            res.status(200).send(resultado)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}