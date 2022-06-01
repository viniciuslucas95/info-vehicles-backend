export class MarcaNoFormatoErradoErro extends Error {
    constructor() {
        super("Marca tem que ser formado por palavras de 2 letras podendo haver espaços")
        this.name = "MarcaNoFormatoErrado"
    }
}