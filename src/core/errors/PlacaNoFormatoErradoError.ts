export class PlacaNoFormatoErradoError extends Error {
    constructor() {
        super("Placa tem que ter o formato ABC-1234")
        this.name = "PlacaNoFormatoErrado"
    }
}