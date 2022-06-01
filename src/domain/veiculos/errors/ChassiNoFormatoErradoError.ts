export class ChassiNoFormatoErradoError extends Error {
    constructor() {
        super("Chassi tem que ter 17 caracteres")
        this.name = "ChassiNoFormatoErrado"
    }
}