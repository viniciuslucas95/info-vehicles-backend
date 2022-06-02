import { BadRequestErro } from "../../nucleo-compartilhado/erros"

export class AnoNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("AnoNoFormatoErrado", "Ano tem que estar entre 1886 e ano atual")
    }
}