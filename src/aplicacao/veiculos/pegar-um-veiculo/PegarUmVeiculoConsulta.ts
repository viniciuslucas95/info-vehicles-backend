import { Consulta } from "../../configuracoes/consultas";

export class PegarUmVeiculoConsulta implements Consulta {
    constructor(public readonly id: string) { }
}