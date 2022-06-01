export class VeiculoNaoEncontradoErro extends Error {
    constructor() {
        super("O veículo não foi encontrado")
        this.name = "VeiculoNaoEncontrado"
    }
}