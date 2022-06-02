import { Id } from "../../../dominio/nucleo-compartilhado";
import { Veiculo, VeiculoRepositorio } from "../../../dominio/veiculos";
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from "../../../dominio/veiculos/objetos-de-valor";
import { ChecadorDeVeiculoChassi, ChecadorDeVeiculoId, ChecadorDeVeiculoPlaca, ChecadorDeVeiculoRenavam } from "../../../dominio/veiculos/servicos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { AdicionarOuAtualizarVeiculoComando } from "./AdicionarOuAtualizarVeiculoComando";
import { VeiculoDto } from "./VeiculoDto";

export class AdicionarOuAtualizarVeiculoManipuladorDeComando implements ManipuladorDeComando<AdicionarOuAtualizarVeiculoComando, VeiculoDto> {
    constructor(
        private readonly repositorio: VeiculoRepositorio,
        private readonly checadorDeId: ChecadorDeVeiculoId,
        private readonly checadorDePlaca: ChecadorDeVeiculoPlaca,
        private readonly checadorDeChassi: ChecadorDeVeiculoChassi,
        private readonly checadorDeRenavam: ChecadorDeVeiculoRenavam
    ) { }

    async manipular(request: AdicionarOuAtualizarVeiculoComando): Promise<VeiculoDto> {
        const id = new Id()
        const placa = new Placa(request.placa)
        const chassi = new Chassi(request.chassi)
        const renavam = new Renavam(request.renavam)
        const modelo = new Modelo(request.modelo)
        const marca = new Marca(request.marca)
        const ano = new Ano(request.ano)
        const veiculo = await Veiculo.criar(
            id,
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano,
            this.checadorDeId,
            this.checadorDePlaca,
            this.checadorDeChassi,
            this.checadorDeRenavam)

        await this.repositorio.adicionarOuAtualizar(veiculo)

        return new VeiculoDto(veiculo.id)
    }
}