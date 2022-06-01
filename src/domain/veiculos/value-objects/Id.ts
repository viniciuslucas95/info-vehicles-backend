import { v4 } from 'uuid'

export class Id {
    public valor: string

    constructor() {
        this.valor = v4()
    }
}