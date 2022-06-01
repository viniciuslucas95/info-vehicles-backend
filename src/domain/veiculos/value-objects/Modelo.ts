import { ModeloNoFormatoErradoError } from "../errors";

export class Modelo {
    private readonly padrao = /^[a-zA-Z0-9]{1,}(?:\s[a-zA-Z0-9]{1,})*$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ModeloNoFormatoErradoError()
        }
    }
}