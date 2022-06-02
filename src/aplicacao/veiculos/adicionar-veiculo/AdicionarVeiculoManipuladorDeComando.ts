import { Id } from "../../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../../dominio/veiculos/objetos-de-valor";
import { ChecadorDeVeiculoChassi, ChecadorDeVeiculoId, ChecadorDeVeiculoPlaca, ChecadorDeVeiculoRenavam } from "../../../dominio/veiculos/servicos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { AdicionarVeiculoComando } from "./AdicionarVeiculoComando";
import { VeiculoDto } from "./VeiculoDto";

export class AdicionarVeiculoManipuladorDeComando implements ManipuladorDeComando<AdicionarVeiculoComando, VeiculoDto> {
    constructor(
        private readonly _repositorio: VeiculoRepositorio,
        private readonly _checadorDeId: ChecadorDeVeiculoId,
        private readonly _checadorDePlaca: ChecadorDeVeiculoPlaca,
        private readonly _checadorDeChassi: ChecadorDeVeiculoChassi,
        private readonly _checadorDeRenavam: ChecadorDeVeiculoRenavam
    ) { }

    async manipular(valor: AdicionarVeiculoComando): Promise<VeiculoDto> {
        const id = new Id()
        const placa = new Placa(valor.placa)
        const chassi = new Chassi(valor.chassi)
        const renavam = new Renavam(valor.renavam)
        const modelo = new Modelo(valor.modelo)
        const marca = new Marca(valor.marca)
        const ano = new Ano(valor.ano)
        const veiculo = await Veiculo.criar(
            id,
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano,
            this._checadorDeId,
            this._checadorDePlaca,
            this._checadorDeChassi,
            this._checadorDeRenavam)

        await this._repositorio.adicionarOuAtualizar(veiculo)

        return new VeiculoDto(veiculo.id)
    }
}