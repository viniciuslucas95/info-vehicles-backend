export class PlacaJaCriadoErro extends Error {
    constructor() {
        super("Placa já criada")
        this.name = "PlacaJaCriada"
    }
}