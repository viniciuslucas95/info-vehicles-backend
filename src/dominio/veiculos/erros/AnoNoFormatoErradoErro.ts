export class AnoNoFormatoErradoErro extends Error {
    constructor() {
        super("Ano tem que estar entre 1886 e ano atual")
        this.name = "AnoNoFormatoErrado"
    }
}