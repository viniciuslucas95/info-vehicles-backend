import { ChecadorDeSingularidade } from "../../nucleo-compartilhado";
import { RenavamNoFormatoErradoErro } from "../erros";
import { ChecadorDeRenavam } from "../servicos";

export class Renavam {
    private readonly padrao = /^[0-9]{9}$/;

    private constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new RenavamNoFormatoErradoErro()
        }
    }

    public static async criar(
        valor: string,
        checador: ChecadorDeRenavam) {
        const renavam = new Renavam(valor)

        await checador.checar(renavam.valor)

        return renavam
    }

    public static criarSemValidacao(valor: string) {
        return new Renavam(valor)
    }
}