import { Comando } from "../../configuracoes/comandos";

export class DeletarVeiculoComando implements Comando {
    constructor(public readonly id: string) { }
}