import { Id } from "../../../dominio/nucleo-compartilhado";
import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ManipuladorDeConsulta } from "../../configuracoes/consultas";
import { VeiculoNaoEncontradoErro } from "../erros";
import { PegarUmVeiculoConsulta } from "./PegarUmVeiculoConsulta";
import { VeiculoDto } from "./VeiculoDto";

export class PegarUmVeiculoManipuladorDeConsulta implements ManipuladorDeConsulta<PegarUmVeiculoConsulta, VeiculoDto>{
    public constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async manipular(valor: PegarUmVeiculoConsulta): Promise<VeiculoDto> {
        const id = new Id(valor.id)
        const veiculo = await this._repositorio.pegarUm(id.valor)

        if (!veiculo) throw new VeiculoNaoEncontradoErro()

        return new VeiculoDto(veiculo.placa, veiculo.chassi, veiculo.renavam, veiculo.modelo, veiculo.marca, veiculo.ano)
    }

}