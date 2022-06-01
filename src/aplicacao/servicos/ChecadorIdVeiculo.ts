import { ChecadorDeSingularidade } from "../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../dominio/veiculos";
import { IdJaCriadoErro } from "../erros/IdJaCriadoErro";

export class ChecadorIdVeiculo implements ChecadorDeSingularidade<string>{
    constructor(private readonly repositorio: VeiculoRepositorio) { }

    async checar(id: string): Promise<void> {
        const doesExist = await this.repositorio.pegarUm(id)

        if (doesExist) throw new IdJaCriadoErro()
    }
}