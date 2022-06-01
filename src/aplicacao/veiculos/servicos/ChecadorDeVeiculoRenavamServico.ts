import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { Renavam } from "../../../dominio/veiculos/objetos-de-valor"
import { ChecadorDeVeiculoRenavam } from "../../../dominio/veiculos/servicos"
import { IdJaCriadoErro } from "../erros"

export class ChecadorDeVeiculoRenavamServico implements ChecadorDeVeiculoRenavam {
    constructor(private readonly repositorio: VeiculoRepositorio) { }

    async checar(renavam: Renavam): Promise<void> {
        const doesExist = await this.repositorio.pegarUmPeloRenavam(renavam)

        if (doesExist) throw new IdJaCriadoErro()
    }
}