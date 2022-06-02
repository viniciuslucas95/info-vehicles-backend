import { ChecadorDeId, Id } from "../../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../../dominio/veiculos/objetos-de-valor";
import { ChecadorDePlaca, ChecadorDeChassi, ChecadorDeRenavam } from "../../../dominio/veiculos/servicos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { AdicionarVeiculoComando } from "./AdicionarVeiculoComando";
import { VeiculoDto } from "./VeiculoDto";

export class AdicionarVeiculoManipuladorDeComando implements ManipuladorDeComando<AdicionarVeiculoComando, VeiculoDto> {
    constructor(
        private readonly _repositorio: VeiculoRepositorio,
        private readonly _checadorDeId: ChecadorDeId,
        private readonly _checadorDePlaca: ChecadorDePlaca,
        private readonly _checadorDeChassi: ChecadorDeChassi,
        private readonly _checadorDeRenavam: ChecadorDeRenavam
    ) { }

    async manipular(valor: AdicionarVeiculoComando): Promise<VeiculoDto> {
        const id = await Id.criar(this._checadorDeId)
        const placa = await Placa.criar(valor.placa, this._checadorDePlaca)
        const chassi = await Chassi.criar(valor.chassi, this._checadorDeChassi)
        const renavam = await Renavam.criar(valor.renavam, this._checadorDeRenavam)
        const modelo = Modelo.criar(valor.modelo)
        const marca = Marca.criar(valor.marca)
        const ano = Ano.criar(valor.ano)
        const veiculo = Veiculo.criar(id, placa, chassi, renavam, modelo, marca, ano)

        await this._repositorio.adicionarOuAtualizar(veiculo)

        return new VeiculoDto(veiculo.id)
    }
}