import { Id } from "./Id";

export abstract class Entidade {
    constructor(private _id: Id) { }

    public get id() {
        return this._id.valor
    }
}