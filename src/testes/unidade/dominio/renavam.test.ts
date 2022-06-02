import assert from 'assert'
import { RenavamNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Renavam } from '../../../dominio/veiculos/objetos-de-valor'
import { ChecadorDeRenavam } from '../../../dominio/veiculos/servicos'
import { ChecadorDeRenavamMock } from './mocks'

const checadorDeRenavam: ChecadorDeRenavam = new ChecadorDeRenavamMock()

describe('Renavam', () => {
    describe('deveria ser criado com', () => {
        it('"123456789"', async () => {
            const renavam = await Renavam.criar('123456789', checadorDeRenavam)

            assert.equal(renavam.valor, '123456789')
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('"1234567890"', async () => await FalharEmCriarRenavam('1234567890'))
        it('"12345678"', async () => await FalharEmCriarRenavam('12345678'))
        it('"TEXTO_ALEATORIO"', async () => await FalharEmCriarRenavam('TEXTO_ALEATORIO'))
        it('número', async () => await FalharEmCriarRenavam(123456789))
        it('nulo', async () => await FalharEmCriarRenavam(null))
        it('vazio', async () => await FalharEmCriarRenavam(""))
    })
})

async function FalharEmCriarRenavam(valor: any) {
    const errorExemplo = new RenavamNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        await Renavam.criar(valor, checadorDeRenavam)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}