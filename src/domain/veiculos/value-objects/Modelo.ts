import { ModeloNoFormatoErradoError } from "../errors";

export class Modelo {
    private readonly padrao = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ModeloNoFormatoErradoError()
        }
    }
}