import { Id } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { VeiculoNaoEncontradoErro } from "../erros";
import { AtualizarVeiculoComando } from "./AtualizarVeiculoComando";

export class AtualizarVeiculoManipuladorDeComando implements ManipuladorDeComando<AtualizarVeiculoComando, void>{
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async manipular(valor: AtualizarVeiculoComando): Promise<void> {
        const id = new Id(valor.id)
        const veiculo = await this._repositorio.pegarUm(id.valor)

        if (!veiculo) throw new VeiculoNaoEncontradoErro()

        if (valor.placa) veiculo.placa = valor.placa
        if (valor.chassi) veiculo.chassi = valor.chassi
        if (valor.renavam) veiculo.renavam = valor.renavam
        if (valor.modelo) veiculo.modelo = valor.modelo
        if (valor.marca) veiculo.marca = valor.marca
        if (valor.ano) veiculo.ano = valor.ano

        await this._repositorio.adicionarOuAtualizar(veiculo)
    }

}