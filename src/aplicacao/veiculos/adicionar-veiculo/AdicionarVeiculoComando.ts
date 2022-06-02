import { Comando } from "../../configuracoes/comandos";

export class AdicionarVeiculoComando implements Comando {
    constructor(
        public readonly placa: string,
        public readonly chassi: string,
        public readonly renavam: string,
        public readonly modelo: string,
        public readonly marca: string,
        public readonly ano: number) { }
}