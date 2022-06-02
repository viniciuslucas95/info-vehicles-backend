import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { ChecadorDeChassi } from "../../../dominio/veiculos/servicos"
import { ChassiJaCriadoErro } from "../erros"

export class ChecadorDeChassiServico implements ChecadorDeChassi {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(valor: string): Promise<void> {
        const existe = await this._repositorio.pegarUmPeloChassi(valor)

        if (existe) throw new ChassiJaCriadoErro()
    }
}