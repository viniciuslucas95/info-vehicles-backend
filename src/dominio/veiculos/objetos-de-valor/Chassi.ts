import { ChecadorDeSingularidade } from "../../nucleo-compartilhado";
import { ChassiNoFormatoErradoErro } from "../erros";
import { ChecadorDeChassi } from "../servicos";

export class Chassi {
    private readonly padrao = /^[A-Z0-9]{17}$/;

    private constructor(public valor: string) {
        if (typeof valor !== 'string' || !valor.match(this.padrao)) {
            throw new ChassiNoFormatoErradoErro()
        }
    }

    public static async criar(
        valor: string,
        checador: ChecadorDeChassi) {
        const chassi = new Chassi(valor)

        await checador.checar(chassi.valor)

        return chassi
    }

    public static criarSemValidacao(valor: string) {
        return new Chassi(valor)
    }
}