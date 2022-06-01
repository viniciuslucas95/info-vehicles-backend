import { Id } from "./value-objects";

export abstract class Entity {
    constructor(private _id: Id) { }

    public get id() {
        return this._id.valor
    }
}