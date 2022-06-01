export class RenavamNoFormatoErradoErro extends Error {
    constructor() {
        super("Renavam tem que ter 9 números")
        this.name = "RenavamNoFormatoErrado"
    }
}