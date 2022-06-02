import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { Placa } from "../../../dominio/veiculos/objetos-de-valor"
import { ChecadorDeVeiculoPlaca } from "../../../dominio/veiculos/servicos"
import { PlacaJaCriadoErro } from "../erros"

export class ChecadorDeVeiculoPlacaServico implements ChecadorDeVeiculoPlaca {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(placa: Placa): Promise<void> {
        const doesExist = await this._repositorio.pegarUmPelaPlaca(placa.valor)

        if (doesExist) throw new PlacaJaCriadoErro()
    }
}