import { Entity } from './Entity';
import { Id, Marca, Modelo, Placa, Renavam, Ano } from './value-objects'

export class Veiculo extends Entity {
    constructor(
        id: Id,
        private _placa: Placa,
        private _renavam: Renavam,
        private _modelo: Modelo,
        private _marca: Marca,
        private _ano: Ano) {
        super(id)
    }

    public get placa() {
        return this._placa.valor
    }

    public get renavam() {
        return this._renavam.valor
    }

    public get modelo() {
        return this._modelo.valor
    }

    public get marca() {
        return this._marca.valor
    }

    public get ano() {
        return this._ano.valor
    }
}