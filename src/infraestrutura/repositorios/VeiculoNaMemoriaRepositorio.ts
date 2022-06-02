import { Veiculo, VeiculoRepositorio } from "../../dominio/veiculos";

export class VeiculoNaMemoriaRepositorio implements VeiculoRepositorio {
    private readonly veiculos: Veiculo[] = []

    async adicionarOuAtualizar(valor: Veiculo): Promise<void> {
        const resultado = await this.pegarUm(valor.id)

        if (resultado) {
            const index = this.veiculos.indexOf(resultado)

            this.veiculos[index] = valor

            return
        }

        this.veiculos.push(valor)
    }

    async pegarUm(id: string): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.id === id)
    }

    async pegarTodos(): Promise<Veiculo[]> {
        return this.veiculos
    }

    async pegarUmPelaPlaca(placa: string): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.placa === placa)
    }

    async pegarUmPeloChassi(chassi: string): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.chassi === chassi)
    }

    async pegarUmPeloRenavam(renavam: string): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.renavam === renavam)
    }
}