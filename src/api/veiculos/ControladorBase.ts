import { Response } from 'express'
import { ErroBase } from '../../dominio/nucleo-compartilhado/erros'

export abstract class ControladorBase {
    protected enviarErro(res: Response, erro: unknown) {
        const resultado = <ErroBase>erro

        res.status(resultado.statusCode).send({
            name: resultado.name,
            message: resultado.message
        })
    }
}