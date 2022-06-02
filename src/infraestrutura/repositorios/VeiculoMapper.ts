import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo } from "../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../dominio/veiculos/objetos-de-valor";
import { DataMapper } from "../configuracoes";
import { Veiculo as VeiculoData } from "./Veiculo";

export class VeiculoMapper implements DataMapper<VeiculoData, Veiculo>{
    map(data: VeiculoData): Veiculo {
        const id = new Id(data.id)
        const placa = new Placa(data.placa)
        const chassi = new Chassi(data.chassi)
        const renavam = new Renavam(data.renavam)
        const modelo = new Modelo(data.modelo)
        const marca = new Marca(data.marca)
        const ano = new Ano(data.ano)

        return Veiculo.createWithoutValidation(id, placa, chassi, renavam, modelo, marca, ano)
    }
}