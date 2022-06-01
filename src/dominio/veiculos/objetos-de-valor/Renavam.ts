import { RenavamNoFormatoErradoErro } from "../erros";

export class Renavam {
    private readonly padrao = /^[0-9]{9}$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new RenavamNoFormatoErradoErro()
        }
    }
}