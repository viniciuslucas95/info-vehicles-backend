import axios from 'axios'
import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../dominio/veiculos";
import { Placa, Chassi, Renavam } from "../../dominio/veiculos/objetos-de-valor";
import { Veiculo as VeiculoData } from './Veiculo'
import { DataMapper } from "../configuracoes/DataMapper";

export class VeiculoNoJsonServerRepositorio implements VeiculoRepositorio {
    private readonly url = 'http://localhost:3002/veiculos'

    constructor(private readonly dataMapper: DataMapper<VeiculoData, Veiculo>) { }

    async adicionarOuAtualizar(valor: Veiculo): Promise<void> {
        const data = new VeiculoData(valor.id, valor.placa, valor.chassi, valor.renavam, valor.modelo, valor.marca, valor.ano)

        await axios.post(this.url, data)
    }

    async pegarTodos(): Promise<Veiculo[]> {
        const resultado = await axios.get<VeiculoData[]>(this.url)

        return resultado.data.map(veiculo => this.dataMapper.map(veiculo))
    }

    async pegarUm(id: Id): Promise<Veiculo | undefined> {
        try {
            const resultado = await axios.get<VeiculoData>(`${this.url}/${id.valor}`)

            return this.dataMapper.map(resultado.data)
        } catch (err) {
            return undefined
        }
    }

    async pegarUmPelaPlaca(placa: Placa): Promise<Veiculo | undefined> {
        const resultado = await axios.get<VeiculoData[]>(`${this.url}?placa=${placa.valor}&_limit=1`)
        const data: VeiculoData | undefined = resultado.data[0]

        return data !== undefined ? this.dataMapper.map(resultado.data[0]) : data
    }

    async pegarUmPeloChassi(chassi: Chassi): Promise<Veiculo | undefined> {
        const resultado = await axios.get<VeiculoData[]>(`${this.url}?chassi=${chassi.valor}&_limit=1`)
        const data: VeiculoData | undefined = resultado.data[0]

        return data !== undefined ? this.dataMapper.map(resultado.data[0]) : data
    }

    async pegarUmPeloRenavam(renavam: Renavam): Promise<Veiculo | undefined> {
        const resultado = await axios.get<VeiculoData[]>(`${this.url}?renavam=${renavam.valor}&_limit=1`)
        const data: VeiculoData | undefined = resultado.data[0]

        return data !== undefined ? this.dataMapper.map(resultado.data[0]) : data
    }
}