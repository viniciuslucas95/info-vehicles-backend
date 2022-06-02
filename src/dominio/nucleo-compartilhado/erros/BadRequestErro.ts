import { ErroBase } from "./ErroBase";
import { StatusCode } from "./StatusCode";

export class BadRequestErro extends ErroBase {
    constructor(name: string, message?: string) {
        super(StatusCode.BAD_REQUEST, name, message)
    }
}