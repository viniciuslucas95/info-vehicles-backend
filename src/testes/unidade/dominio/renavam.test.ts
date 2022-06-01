import assert from 'assert'
import { RenavamNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Renavam } from '../../../dominio/veiculos/objetos-de-valor'

describe('Renavam', () => {
    describe('deveria', () => {
        it('ser criado com "123456789"', () => {
            const renavam = new Renavam('123456789')

            assert.equal(renavam.valor, '123456789')
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "1234567890"', () => FalharEmCriarRenavam('1234567890'))
        it('ser criado com "12345678"', () => FalharEmCriarRenavam('12345678'))
        it('ser criado com "TEXTO_ALEATORIO"', () => FalharEmCriarRenavam('TEXTO_ALEATORIO'))
        it('ser criado com número', () => FalharEmCriarRenavam(123456789))
        it('ser criado com nulo', () => FalharEmCriarRenavam(null))
        it('ser criado com vazio', () => FalharEmCriarRenavam(""))
    })
})

function FalharEmCriarRenavam(valor: any) {
    const errorExemplo = new RenavamNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        new Renavam(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}