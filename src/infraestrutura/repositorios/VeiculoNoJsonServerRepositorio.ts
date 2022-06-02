import axios from 'axios'
import { Id } from "../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../dominio/veiculos";
import { Placa, Chassi, Renavam } from "../../dominio/veiculos/objetos-de-valor";
import { Veiculo as DadosDoVeiculo } from './Veiculo'
import { MapeadorDeDados } from "../configuracoes/MapeadorDeDados";

export class VeiculoNoJsonServerRepositorio implements VeiculoRepositorio {
    private readonly url = 'http://localhost:3002/veiculos'

    constructor(private readonly mapeadorDeDados: MapeadorDeDados<DadosDoVeiculo, Veiculo>) { }

    async adicionarOuAtualizar(valor: Veiculo): Promise<void> {
        const dados = new DadosDoVeiculo(valor.id, valor.placa, valor.chassi, valor.renavam, valor.modelo, valor.marca, valor.ano)

        await axios.post(this.url, dados)
    }

    async pegarTodos(): Promise<Veiculo[]> {
        const resultado = await axios.get<DadosDoVeiculo[]>(this.url)

        return resultado.data.map(veiculo => this.mapeadorDeDados.mapear(veiculo))
    }

    async pegarUm(id: Id): Promise<Veiculo | undefined> {
        try {
            const resultado = await axios.get<DadosDoVeiculo>(`${this.url}/${id.valor}`)

            return this.mapeadorDeDados.mapear(resultado.data)
        } catch (erro) {
            return undefined
        }
    }

    async pegarUmPelaPlaca(placa: Placa): Promise<Veiculo | undefined> {
        const resultado = await axios.get<DadosDoVeiculo[]>(`${this.url}?placa=${placa.valor}&_limit=1`)
        const dados: DadosDoVeiculo | undefined = resultado.data[0]

        return dados !== undefined ? this.mapeadorDeDados.mapear(resultado.data[0]) : dados
    }

    async pegarUmPeloChassi(chassi: Chassi): Promise<Veiculo | undefined> {
        const resultado = await axios.get<DadosDoVeiculo[]>(`${this.url}?chassi=${chassi.valor}&_limit=1`)
        const dados: DadosDoVeiculo | undefined = resultado.data[0]

        return dados !== undefined ? this.mapeadorDeDados.mapear(resultado.data[0]) : dados
    }

    async pegarUmPeloRenavam(renavam: Renavam): Promise<Veiculo | undefined> {
        const resultado = await axios.get<DadosDoVeiculo[]>(`${this.url}?renavam=${renavam.valor}&_limit=1`)
        const dados: DadosDoVeiculo | undefined = resultado.data[0]

        return dados !== undefined ? this.mapeadorDeDados.mapear(resultado.data[0]) : dados
    }
}