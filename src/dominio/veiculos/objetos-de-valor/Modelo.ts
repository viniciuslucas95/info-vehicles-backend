import { ModeloNoFormatoErradoErro } from "../erros";

export class Modelo {
    private readonly padrao = /^[a-zA-Z0-9]{1,}(?:\s[a-zA-Z0-9]{1,})*$/;

    private constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ModeloNoFormatoErradoErro()
        }
    }

    public static criar(valor: string) {
        return new Modelo(valor)
    }
}