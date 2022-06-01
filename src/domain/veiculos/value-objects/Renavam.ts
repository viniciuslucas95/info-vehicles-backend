import { RenavamNoFormatoErradoError } from "../errors";

export class Renavam {
    private readonly padrao = /^[0-9]{9}$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new RenavamNoFormatoErradoError()
        }
    }
}