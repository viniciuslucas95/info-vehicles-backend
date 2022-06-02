import { BadRequestErro } from "../../nucleo-compartilhado/erros"

export class ModeloNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("ModeloNoFormatoErrado", "Modelo tem que ser formado por palavras de 1 letras podendo haver espaços")
    }
}