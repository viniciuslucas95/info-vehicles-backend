import { ChassiNoFormatoErradoErro } from "../erros";

export class Chassi {
    private readonly padrao = /^[A-Z0-9]{17}$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ChassiNoFormatoErradoErro()
        }
    }
}