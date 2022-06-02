import { Request, Response } from 'express'
import { ManipuladorDeComando } from "../../aplicacao/configuracoes/comandos";
import { ManipuladorDeConsulta } from "../../aplicacao/configuracoes/consultas";
import { AdicionarVeiculoComando, VeiculoDto as AdicionarVeiculoDto } from "../../aplicacao/veiculos/adicionar-veiculo";
import { AtualizarVeiculoComando } from '../../aplicacao/veiculos/atualizar-veiculo';
import { DeletarVeiculoComando } from '../../aplicacao/veiculos/deletar-veiculo';
import { PegarTodosVeiculosConsulta, TodosVeiculosDto } from "../../aplicacao/veiculos/pegar-todos-veiculos";
import { VeiculoDto as PegarVeiculoDto, PegarUmVeiculoConsulta } from "../../aplicacao/veiculos/pegar-um-veiculo";

export class ControladorDeVeiculos {
    constructor(
        private readonly _adicionarVeiculoManipuladorDeComando: ManipuladorDeComando<AdicionarVeiculoComando, AdicionarVeiculoDto>,
        private readonly _atualizarVeiculoManipuladorDeComando: ManipuladorDeComando<AtualizarVeiculoComando, void>,
        private readonly _deletarVeiculoManipuladorDeComando: ManipuladorDeComando<DeletarVeiculoComando, void>,
        private readonly _pegarTodosVeiculosManipuladorDeConsulta: ManipuladorDeConsulta<PegarTodosVeiculosConsulta, TodosVeiculosDto[]>,
        private readonly _pegarUmVeiculoManipuladorDeConsulta: ManipuladorDeConsulta<PegarUmVeiculoConsulta, PegarVeiculoDto>
    ) { }

    async post(req: Request, res: Response) {
        try {
            const comando = new AdicionarVeiculoComando(
                req.body.placa,
                req.body.chassi,
                req.body.renavam,
                req.body.modelo,
                req.body.marca,
                req.body.ano)
            const resultado = await this._adicionarVeiculoManipuladorDeComando.manipular(comando)
            res.status(201).send(resultado)
        } catch (erro) {
            res.status(400).send(erro)
        }
    }

    async patch(req: Request, res: Response) {
        try {
            const comando = new AtualizarVeiculoComando(
                req.params.id,
                req.body.placa,
                req.body.chassi,
                req.body.renavam,
                req.body.modelo,
                req.body.marca,
                req.body.ano)
            await this._atualizarVeiculoManipuladorDeComando.manipular(comando)
            res.sendStatus(204)
        } catch (erro) {
            res.status(400).send(erro)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const comando = new DeletarVeiculoComando(req.params.id)
            await this._deletarVeiculoManipuladorDeComando.manipular(comando)
            res.sendStatus(204)
        } catch (erro) {
            res.status(400).send(erro)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const consulta = new PegarTodosVeiculosConsulta()
            const resultado = await this._pegarTodosVeiculosManipuladorDeConsulta.manipular(consulta)
            res.status(200).send(resultado)
        } catch (erro) {
            res.status(400).send(erro)
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const consulta = new PegarUmVeiculoConsulta(req.params.id)
            const resultado = await this._pegarUmVeiculoManipuladorDeConsulta.manipular(consulta)
            res.status(200).send(resultado)
        } catch (erro) {
            res.status(400).send(erro)
        }
    }
}