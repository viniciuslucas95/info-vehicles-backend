import { BadRequestErro } from "./erros"

export class IdNoFormatoErradoErro extends BadRequestErro {
    constructor() {
        super("IdNoFormatoErrado", "Formato do id tem que ser uuid (8-4-4-4-12)")
    }
}