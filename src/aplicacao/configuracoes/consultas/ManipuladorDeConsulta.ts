import { Consulta } from "./Consulta";

export interface ManipuladorDeConsulta<Requisicao extends Consulta, Resposta> {
    manipular(valor: Requisicao): Promise<Resposta[]>
}