import { v4 } from 'uuid'
import { FormatoErradoDoUuidErro } from './FormatoErradoDoUuidErro'

export class Id {
    private readonly _pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

    public valor: string

    constructor()
    constructor(valor: string)

    constructor(valor?: string) {
        if (valor) {
            if (!valor.match(this._pattern))
                throw new FormatoErradoDoUuidErro()

            this.valor = valor
            return
        }

        this.valor = v4()
    }
}