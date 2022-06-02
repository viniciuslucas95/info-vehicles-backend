import { VeiculoRepositorio } from "../../../dominio/veiculos"
import { Chassi } from "../../../dominio/veiculos/objetos-de-valor"
import { ChecadorDeVeiculoChassi } from "../../../dominio/veiculos/servicos"
import { ChassiJaCriadoErro } from "../erros"

export class ChecadorDeVeiculoChassiServico implements ChecadorDeVeiculoChassi {
    constructor(private readonly repositorio: VeiculoRepositorio) { }

    async checar(chassi: Chassi): Promise<void> {
        const doesExist = await this.repositorio.pegarUmPeloChassi(chassi)

        if (doesExist) throw new ChassiJaCriadoErro()
    }
}