import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { ChecadorDeRenavam } from "../../../dominio/veiculos/servicos"
import { RenavamJaCriadoErro } from "../erros"

export class ChecadorDeRenavamServico implements ChecadorDeRenavam {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(valor: string): Promise<void> {
        const existe = await this._repositorio.pegarUmPeloRenavam(valor)

        if (existe) throw new RenavamJaCriadoErro()
    }
}