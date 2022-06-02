import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ManipuladorDeComando } from "../../configuracoes/comandos";
import { VeiculoNaoEncontradoErro } from "../erros";
import { DeletarVeiculoComando } from "./DeletarVeiculoComando";

export class DeletarVeiculoManipuladorDeComando implements ManipuladorDeComando<DeletarVeiculoComando, void>{
    constructor(private readonly _repositorio: VeiculoRepositorio) { }

    async manipular(valor: DeletarVeiculoComando): Promise<void> {
        const resultado = await this._repositorio.pegarUm(valor.id)

        if (!resultado) throw new VeiculoNaoEncontradoErro()

        await this._repositorio.deletar(valor.id)
    }

}