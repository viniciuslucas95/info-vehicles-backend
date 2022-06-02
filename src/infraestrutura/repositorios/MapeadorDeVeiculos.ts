import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo } from "../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../dominio/veiculos/objetos-de-valor";
import { MapeadorDeDados } from "../configuracoes";
import { Veiculo as DadosDoVeiculo } from "./Veiculo";

export class MapeadorDeVeiculos implements MapeadorDeDados<DadosDoVeiculo, Veiculo>{
    mapear(dados: DadosDoVeiculo): Veiculo {
        const id = Id.criarSemValidacao(dados.id)
        const placa = Placa.criarSemValidacao(dados.placa)
        const chassi = Chassi.criarSemValidacao(dados.chassi)
        const renavam = Renavam.criarSemValidacao(dados.renavam)
        const modelo = Modelo.criar(dados.modelo)
        const marca = Marca.criar(dados.marca)
        const ano = Ano.criar(dados.ano)

        return Veiculo.criar(id, placa, chassi, renavam, modelo, marca, ano)
    }
}