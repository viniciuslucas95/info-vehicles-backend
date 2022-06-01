import assert from 'assert'
import { RenavamNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Renavam } from '../../../dominio/veiculos/objetos-de-valor'

describe('Renavam', () => {
    describe('deveria ser criado com', () => {
        it('"123456789"', () => {
            const renavam = new Renavam('123456789')

            assert.equal(renavam.valor, '123456789')
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('"1234567890"', () => FalharEmCriarRenavam('1234567890'))
        it('"12345678"', () => FalharEmCriarRenavam('12345678'))
        it('"TEXTO_ALEATORIO"', () => FalharEmCriarRenavam('TEXTO_ALEATORIO'))
        it('número', () => FalharEmCriarRenavam(123456789))
        it('nulo', () => FalharEmCriarRenavam(null))
        it('vazio', () => FalharEmCriarRenavam(""))
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