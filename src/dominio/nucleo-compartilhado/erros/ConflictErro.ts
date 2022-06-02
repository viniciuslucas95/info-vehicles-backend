import { ErroBase } from "./ErroBase";
import { StatusCode } from "./StatusCode";

export class ConflictErro extends ErroBase {
    constructor(name: string, message?: string) {
        super(StatusCode.CONFLICT, name, message)
    }
}