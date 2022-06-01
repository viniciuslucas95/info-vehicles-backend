export class ChassiNoFormatoErradoErro extends Error {
    constructor() {
        super("Chassi tem que ser composto por 17 caracteres de letras maiúsculas ou números")
        this.name = "ChassiNoFormatoErrado"
    }
}