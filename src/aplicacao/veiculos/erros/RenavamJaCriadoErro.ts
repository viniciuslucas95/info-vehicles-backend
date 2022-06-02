import { ConflictErro } from "../../../dominio/nucleo-compartilhado/erros"

export class RenavamJaCriadoErro extends ConflictErro {
    constructor() {
        super("Renavam já criado")
    }
}