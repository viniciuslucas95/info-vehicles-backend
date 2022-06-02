import { BadRequestErro } from "../../nucleo-compartilhado/erros"

export class PlacaNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("PlacaNoFormatoErrado", "Placa tem que ter o formato ABC-1234")
    }
}