import { Id } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ChecadorDeVeiculoId } from "../../../dominio/veiculos/servicos";
import { IdJaCriadoErro } from "../erros/IdJaCriadoErro";

export class ChecadorDeVeiculoIdServico implements ChecadorDeVeiculoId {
    constructor(private readonly repositorio: VeiculoRepositorio) { }

    async checar(id: Id): Promise<void> {
        const doesExist = await this.repositorio.pegarUm(id)

        if (doesExist) throw new IdJaCriadoErro()
    }
}