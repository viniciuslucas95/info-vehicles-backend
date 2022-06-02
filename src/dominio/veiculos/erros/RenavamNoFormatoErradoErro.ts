import { BadRequestErro } from "../../nucleo-compartilhado/erros"

export class RenavamNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("RenavamNoFormatoErrado", "Renavam tem que ter 9 números")
    }
}