export class ChassiJaCriadoErro extends Error {
    constructor() {
        super("Chassi já criado")
        this.name = "ChassiJaCriado"
    }
}