import { Id } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../../dominio/veiculos/objetos-de-valor";
import { ChecadorDeChassi, ChecadorDePlaca, ChecadorDeRenavam } from "../../../dominio/veiculos/servicos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { VeiculoNaoEncontradoErro } from "../erros";
import { AtualizarVeiculoComando } from "./AtualizarVeiculoComando";

export class AtualizarVeiculoManipuladorDeComando implements ManipuladorDeComando<AtualizarVeiculoComando, void>{
    constructor(
        private readonly _repositorio: VeiculoRepositorio,
        private readonly _checadorDePlaca: ChecadorDePlaca,
        private readonly _checadorDeChassi: ChecadorDeChassi,
        private readonly _checadorDeRenavam: ChecadorDeRenavam) { }

    async manipular(valor: AtualizarVeiculoComando): Promise<void> {
        const id = Id.criarSemValidacao(valor.id)
        const veiculo = await this._repositorio.pegarUm(id.valor)

        if (!veiculo) throw new VeiculoNaoEncontradoErro()

        if (valor.placa) {
            const placa = await Placa.criar(valor.placa, this._checadorDePlaca)

            veiculo.trocarPlaca(placa)
        }

        if (valor.chassi) {
            const chassi = await Chassi.criar(valor.chassi, this._checadorDeChassi)

            veiculo.trocarChassi(chassi)
        }

        if (valor.renavam) {
            const renavam = await Renavam.criar(valor.renavam, this._checadorDeRenavam)

            veiculo.trocarRenavam(renavam)
        }

        if (valor.modelo) {
            const modelo = Modelo.criar(valor.modelo)

            veiculo.trocarModelo(modelo)
        }

        if (valor.marca) {
            const marca = Marca.criar(valor.marca)

            veiculo.trocarMarca(marca)
        }

        if (valor.ano) {
            const ano = Ano.criar(valor.ano)

            veiculo.trocarAno(ano)
        }

        await this._repositorio.adicionarOuAtualizar(veiculo)
    }

}