export class ModeloNoFormatoErradoError extends Error {
    constructor() {
        super("Modelo tem que ser formado por palavras de 3 letras podendo haver espaços")
        this.name = "ModeloNoFormatoErrado"
    }
}