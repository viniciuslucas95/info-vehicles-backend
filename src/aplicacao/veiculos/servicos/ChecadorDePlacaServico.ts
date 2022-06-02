import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { ChecadorDePlaca } from "../../../dominio/veiculos/servicos"
import { PlacaJaCriadoErro } from "../erros"

export class ChecadorDePlacaServico implements ChecadorDePlaca {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(valor: string): Promise<void> {
        const existe = await this._repositorio.pegarUmPelaPlaca(valor)

        if (existe) throw new PlacaJaCriadoErro()
    }
}