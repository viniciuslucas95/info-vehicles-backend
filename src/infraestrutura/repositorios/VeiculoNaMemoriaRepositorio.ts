import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../dominio/veiculos";
import { Placa, Chassi, Renavam } from "../../dominio/veiculos/objetos-de-valor";

export class VeiculoNaMemoriaRepositorio implements VeiculoRepositorio {
    private readonly veiculos: Veiculo[] = []

    async pegarUm(id: Id): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.id === id.valor)
    }

    async pegarTodos(): Promise<Veiculo[]> {
        return this.veiculos
    }

    async adicionarOuAtualizar(valor: Veiculo): Promise<void> {
        this.veiculos.push(valor)
    }

    async pegarUmPelaPlaca(placa: Placa): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.placa === placa.valor)
    }

    async pegarUmPeloChassi(chassi: Chassi): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.chassi === chassi.valor)
    }

    async pegarUmPeloRenavam(renavam: Renavam): Promise<Veiculo | undefined> {
        return this.veiculos.find(veiculo => veiculo.renavam === renavam.valor)
    }
}