export class IdJaCriadoErro extends Error {
    constructor() {
        super("O id calhou de aleatoriamente ao ser gerado, ter um valor já existente")
        this.name = "IdJaCriado"
    }
}