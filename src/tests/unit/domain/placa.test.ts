import assert from 'assert'
import { PlacaNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Placa } from '../../../domain/veiculos/value-objects'

describe('Placa', () => {
    describe('deveria', () => {
        it('ser criada com "ABC-1234"', () => {
            const placa = new Placa('ABC-1234')

            assert.equal(placa.valor, 'ABC-1234')
        })
    })

    describe('NÃO deveria', () => {
        it('ser criada com "ABC-123"', () => FalharEmCriarPlaca('ABC-123'))
        it('ser criada com "ABC-12345"', () => FalharEmCriarPlaca('ABC-12345'))
        it('ser criada com "AB-1234"', () => FalharEmCriarPlaca('AB-1234'))
        it('ser criada com "ABCD-1234"', () => FalharEmCriarPlaca('ABCD-1234'))
        it('ser criada com "TEXTO_ALEATORIO"', () => FalharEmCriarPlaca('TEXTO_ALEATORIO'))
        it('ser criada com número', () => FalharEmCriarPlaca(123456789))
        it('ser criada com nulo', () => FalharEmCriarPlaca(null))
        it('ser criada com vazio', () => FalharEmCriarPlaca(""))
    })
})

function FalharEmCriarPlaca(valor: any) {
    const errorExemplo = new PlacaNoFormatoErradoError()
    let errorRecebido!: Error

    try {
        new Placa(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}