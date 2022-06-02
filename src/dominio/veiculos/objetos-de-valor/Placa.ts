import { ChecadorDeSingularidade } from "../../nucleo-compartilhado";
import { PlacaNoFormatoErradoErro } from "../erros";
import { ChecadorDePlaca } from "../servicos";

export class Placa {
    private readonly padrao = /^[A-Z]{3}-[0-9]{4}$/;

    private constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new PlacaNoFormatoErradoErro()
        }
    }

    public static async criar(
        valor: string,
        checador: ChecadorDePlaca) {
        const placa = new Placa(valor)

        await checador.checar(placa.valor)

        return placa
    }

    public static criarSemValidacao(valor: string) {
        return new Placa(valor)
    }
}