import { BadRequestErro } from "../../nucleo-compartilhado/erros"

export class MarcaNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("MarcaNoFormatoErrado", "Marca tem que ser formado por palavras de 2 letras podendo haver espaços")
    }
}