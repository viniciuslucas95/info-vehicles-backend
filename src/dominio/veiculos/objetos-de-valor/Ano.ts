import { AnoNoFormatoErradoErro } from "../erros";

export class Ano {
    private constructor(public valor: number) {
        const anoAtual = new Date().getFullYear()

        if (typeof valor !== 'number' || valor < 1886 || valor > anoAtual) {
            throw new AnoNoFormatoErradoErro()
        }
    }

    public static criar(valor: number) {
        return new Ano(valor)
    }
}