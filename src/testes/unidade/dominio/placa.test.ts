import assert from 'assert'
import { PlacaNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Placa } from '../../../dominio/veiculos/objetos-de-valor'

describe('Placa', () => {
    describe('deveria ser criada com', () => {
        it('"ABC-1234"', () => {
            const placa = new Placa('ABC-1234')

            assert.equal(placa.valor, 'ABC-1234')
        })
    })

    describe('NÃO deveria ser criada com', () => {
        it('"ABC-123"', () => FalharEmCriarPlaca('ABC-123'))
        it('"ABC-12345"', () => FalharEmCriarPlaca('ABC-12345'))
        it('"AB-1234"', () => FalharEmCriarPlaca('AB-1234'))
        it('"ABCD-1234"', () => FalharEmCriarPlaca('ABCD-1234'))
        it('"TEXTO_ALEATORIO"', () => FalharEmCriarPlaca('TEXTO_ALEATORIO'))
        it('número', () => FalharEmCriarPlaca(123456789))
        it('nulo', () => FalharEmCriarPlaca(null))
        it('vazio', () => FalharEmCriarPlaca(""))
    })
})

function FalharEmCriarPlaca(valor: any) {
    const errorExemplo = new PlacaNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        new Placa(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}