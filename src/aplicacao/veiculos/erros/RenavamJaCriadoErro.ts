export class RenavamJaCriadoErro extends Error {
    constructor() {
        super("Renavam já criado")
        this.name = "RenavamJaCriado"
    }
}