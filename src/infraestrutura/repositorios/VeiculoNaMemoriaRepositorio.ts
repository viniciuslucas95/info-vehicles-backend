import { Veiculo, VeiculoRepositorio } from "../../dominio/veiculos";

export class VeiculoNaMemoriaRepositorio implements VeiculoRepositorio {
    async pegarUm(id: string): Promise<Veiculo | undefined> {
        return undefined
    }
}