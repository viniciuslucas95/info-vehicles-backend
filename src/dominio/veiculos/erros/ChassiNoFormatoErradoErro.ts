import { BadRequestErro } from "../../nucleo-compartilhado/erros";

export class ChassiNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("ChassiNoFormatoErrado", "Chassi tem que ser composto por 17 caracteres de letras maiúsculas ou números")
    }
}