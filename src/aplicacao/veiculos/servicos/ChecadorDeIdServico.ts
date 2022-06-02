import { ChecadorDeId } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { IdJaCriadoErro } from "../erros/IdJaCriadoErro";

export class ChecadorDeIdServico implements ChecadorDeId {
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async checar(valor: string): Promise<void> {
        const existe = await this._repositorio.pegarUm(valor)

        if (existe) throw new IdJaCriadoErro()
    }
}