import { Id } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ChecadorDeVeiculoId } from "../../../dominio/veiculos/servicos";
import { IdJaCriadoErro } from "../erros/IdJaCriadoErro";

export class ChecadorDeVeiculoIdServico implements ChecadorDeVeiculoId {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(id: Id): Promise<void> {
        const doesExist = await this._repositorio.pegarUm(id.valor)

        if (doesExist) throw new IdJaCriadoErro()
    }
}