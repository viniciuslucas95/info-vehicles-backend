import assert from 'assert'
import { PlacaNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Placa } from '../../../dominio/veiculos/objetos-de-valor'
import { ChecadorDePlaca } from '../../../dominio/veiculos/servicos'
import { ChecadorDePlacaMock } from './mocks'

const checadorDePlaca: ChecadorDePlaca = new ChecadorDePlacaMock()

describe('Placa', () => {
    describe('deveria ser criada com', () => {
        it('"ABC-1234"', async () => {
            const placa = await Placa.criar('ABC-1234', checadorDePlaca)

            assert.equal(placa.valor, 'ABC-1234')
        })
    })

    describe('NÃO deveria ser criada com', () => {
        it('"ABC-123"', async () => await FalharEmCriarPlaca('ABC-123'))
        it('"ABC-12345"', async () => await FalharEmCriarPlaca('ABC-12345'))
        it('"AB-1234"', async () => await FalharEmCriarPlaca('AB-1234'))
        it('"ABCD-1234"', async () => await FalharEmCriarPlaca('ABCD-1234'))
        it('"TEXTO_ALEATORIO"', async () => await FalharEmCriarPlaca('TEXTO_ALEATORIO'))
        it('número', async () => await FalharEmCriarPlaca(123456789))
        it('nulo', async () => await FalharEmCriarPlaca(null))
        it('vazio', async () => await FalharEmCriarPlaca(""))
    })
})

async function FalharEmCriarPlaca(valor: any) {
    const errorExemplo = new PlacaNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        await Placa.criar(valor, checadorDePlaca)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}