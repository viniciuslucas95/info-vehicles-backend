import { Entity } from './Entity';
import { Id, Marca, Modelo, Placa, Renavam } from './value-objects'

export class Veiculo extends Entity {
    constructor(
        id: Id,
        private _placa: Placa,
        private _renavam: Renavam,
        private _modelo: Modelo,
        private _marca: Marca) {
        super(id)
    }

    public get placa() {
        return this._placa.valor
    }

    public get renavam() {
        return this._renavam
    }

    public get modelo() {
        return this._modelo
    }

    public get marca() {
        return this._marca
    }
}