import { MarcaNoFormatoErradoErro } from "../erros";

export class Marca {
    private readonly padrao = /^[a-zA-Z0-9]{2,}(?:\s[a-zA-Z0-9]{2,})*$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new MarcaNoFormatoErradoErro()
        }
    }
}