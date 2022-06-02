import { ErroBase } from "./ErroBase";
import { StatusCode } from "./StatusCode";

export class NotFoundErro extends ErroBase {
    constructor(name: string, message?: string) {
        super(StatusCode.NOT_FOUND, name, message)
    }
}