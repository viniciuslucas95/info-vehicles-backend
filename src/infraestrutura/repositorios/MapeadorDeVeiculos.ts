import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo } from "../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../dominio/veiculos/objetos-de-valor";
import { MapeadorDeDados } from "../configuracoes";
import { Veiculo as DadosDoVeiculo } from "./Veiculo";

export class MapeadorDeVeiculos implements MapeadorDeDados<DadosDoVeiculo, Veiculo>{
    mapear(dados: DadosDoVeiculo): Veiculo {
        const id = new Id(dados.id)
        const placa = new Placa(dados.placa)
        const chassi = new Chassi(dados.chassi)
        const renavam = new Renavam(dados.renavam)
        const modelo = new Modelo(dados.modelo)
        const marca = new Marca(dados.marca)
        const ano = new Ano(dados.ano)

        return Veiculo.criarSemValidacao(id, placa, chassi, renavam, modelo, marca, ano)
    }
}