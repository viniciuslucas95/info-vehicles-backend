import { ConflictErro } from "../../../dominio/nucleo-compartilhado/erros"

export class ChassiJaCriadoErro extends ConflictErro {
    constructor() {
        super("ChassiJaCriado")
    }
}