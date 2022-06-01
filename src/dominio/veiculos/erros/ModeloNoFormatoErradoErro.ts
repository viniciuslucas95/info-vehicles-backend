export class ModeloNoFormatoErradoErro extends Error {
    constructor() {
        super("Modelo tem que ser formado por palavras de 1 letras podendo haver espaços")
        this.name = "ModeloNoFormatoErrado"
    }
}