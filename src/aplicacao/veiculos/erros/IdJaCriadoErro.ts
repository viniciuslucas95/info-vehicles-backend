import { InternalServerErrorErro } from "../../../dominio/nucleo-compartilhado/erros"

export class IdJaCriadoErro extends InternalServerErrorErro {
    constructor() {
        super("IdJaCriado", "O id calhou de aleatoriamente ao ser gerado, ter um valor já existente")
    }
}