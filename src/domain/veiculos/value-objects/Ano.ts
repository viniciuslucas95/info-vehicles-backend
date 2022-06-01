import { AnoNoFormatoErradoError } from "../errors";

export class Ano {
    constructor(public valor: number) {
        const anoAtual = new Date().getFullYear()

        if (typeof valor !== 'number' || valor < 1886 || valor > anoAtual) {
            throw new AnoNoFormatoErradoError()
        }
    }
}