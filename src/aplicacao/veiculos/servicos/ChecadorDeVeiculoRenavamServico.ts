import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { Renavam } from "../../../dominio/veiculos/objetos-de-valor"
import { ChecadorDeVeiculoRenavam } from "../../../dominio/veiculos/servicos"
import { RenavamJaCriadoErro } from "../erros"

export class ChecadorDeVeiculoRenavamServico implements ChecadorDeVeiculoRenavam {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(renavam: Renavam): Promise<void> {
        const doesExist = await this._repositorio.pegarUmPeloRenavam(renavam.valor)

        if (doesExist) throw new RenavamJaCriadoErro()
    }
}