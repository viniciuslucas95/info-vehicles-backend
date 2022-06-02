import { v4 } from 'uuid'
import { ChecadorDeId } from './ChecadorDeId'
import { IdNoFormatoErradoErro } from './IdNoFormatoErradoErro'

export class Id {
    private readonly _pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

    public valor: string

    private constructor(valor?: string) {
        if (valor) {
            if (!valor.match(this._pattern))
                throw new IdNoFormatoErradoErro()

            this.valor = valor
            return
        }

        this.valor = v4()
    }

    public static async criar(
        checador: ChecadorDeId,
        valor?: string) {
        const id = new Id(valor)

        await checador.checar(id.valor)

        return id
    }

    public static criarSemValidacao(valor?: string) {
        return new Id(valor)
    }
}