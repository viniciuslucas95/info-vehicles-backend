import { AdicionarOuAtualizarVeiculoComando, VeiculoDto } from "../../aplicacao/veiculos/adicionar-ou-atualizar-veiculo";
import { Request, Response } from 'express'
import { ManipuladorDeComando } from "../../aplicacao/configuracoes";

export class ControladorDeVeiculos {
    constructor(private readonly manipuladorDeComando: ManipuladorDeComando<AdicionarOuAtualizarVeiculoComando, VeiculoDto>) { }

    async post(req: Request, res: Response) {
        try {
            const comando = new AdicionarOuAtualizarVeiculoComando(req.body.placa, req.body.chassi, req.body.renavam, req.body.modelo, req.body.marca, req.body.ano)
            const resultado = await this.manipuladorDeComando.manipular(comando)
            res.status(201).send(resultado)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}