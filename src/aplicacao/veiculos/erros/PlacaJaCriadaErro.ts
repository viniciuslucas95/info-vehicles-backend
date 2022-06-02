import { ConflictErro } from "../../../dominio/nucleo-compartilhado/erros"

export class PlacaJaCriadoErro extends ConflictErro {
    constructor() {
        super("Placa já criada")
    }
}