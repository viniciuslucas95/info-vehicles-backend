import { Comando } from "./Comando";

export interface ManipuladorDeComando<Requisicao extends Comando, Resposta> {
    manipular(valor: Requisicao): Promise<Resposta>
}