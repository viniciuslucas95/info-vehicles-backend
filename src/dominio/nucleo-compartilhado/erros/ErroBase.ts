export abstract class ErroBase extends Error {
    constructor(public statusCode: number, name: string, message?: string) {
        super(message)
        this.name = name
    }
}