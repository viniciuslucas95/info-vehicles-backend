import { ErroBase } from "./ErroBase";
import { StatusCode } from "./StatusCode";

export class InternalServerErrorErro extends ErroBase {
    constructor(name: string, message?: string) {
        super(StatusCode.INTERNAL_SERVER_ERROR, name, message)
    }
}