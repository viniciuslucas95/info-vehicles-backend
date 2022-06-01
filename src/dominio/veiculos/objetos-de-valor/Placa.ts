import { PlacaNoFormatoErradoErro } from "../erros";

export class Placa {
    private readonly padrao = /^[A-Z]{3}-[0-9]{4}$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new PlacaNoFormatoErradoErro()
        }
    }
}