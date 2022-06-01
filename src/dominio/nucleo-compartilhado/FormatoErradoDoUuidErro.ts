export class FormatoErradoDoUuidErro extends Error {
    constructor() {
        super("Formato do id tem que ser uuid (8-4-4-4-12)")
        this.name = "FormatoErradoDoUuid"
    }
}