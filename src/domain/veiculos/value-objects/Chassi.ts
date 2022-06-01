import { ChassiNoFormatoErradoError } from "../errors";

export class Chassi {
    private readonly padrao = /^[a-zA-Z0-9]{17}$/;

    constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ChassiNoFormatoErradoError()
        }
    }
}