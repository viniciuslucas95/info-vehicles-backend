import { NotFoundErro } from "../../../dominio/nucleo-compartilhado/erros"

export class VeiculoNaoEncontradoErro extends NotFoundErro {
    constructor() {
        super("VeiculoNaoEncontrado")
    }
}