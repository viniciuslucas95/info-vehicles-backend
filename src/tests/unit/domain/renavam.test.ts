import assert from 'assert'
import { RenavamNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Renavam } from '../../../domain/veiculos/value-objects'

describe('Renavam', () => {
    describe('deveria', () => {
        it('ser criada com 123456789', () => {
            const renavam = new Renavam('123456789')

            assert.ok(renavam.valor)
        })
    })

    describe('NÃO deveria', () => {
        it('ser criada com 1234567890', () => FalharEmCriarRenavam('1234567890'))
        it('ser criada com 12345678', () => FalharEmCriarRenavam('12345678'))
        it('ser criada com TEXTO_ALEATORIO', () => FalharEmCriarRenavam('TEXTO_ALEATORIO'))
        it('ser criada com número', () => FalharEmCriarRenavam(123456789))
        it('ser criada com NULL', () => FalharEmCriarRenavam(null))
        it('ser criada com vazio', () => FalharEmCriarRenavam(""))
    })
})

function FalharEmCriarRenavam(valor: any) {
    const errorExemplo = new RenavamNoFormatoErradoError()
    let errorRecebido!: Error

    try {
        new Renavam(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}