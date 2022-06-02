import assert from 'assert'
import { ChassiNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Chassi } from '../../../dominio/veiculos/objetos-de-valor'
import { ChecadorDeChassi } from '../../../dominio/veiculos/servicos'
import { ChecadorDeChassiMock } from './mocks'

const checadorDeChassi: ChecadorDeChassi = new ChecadorDeChassiMock()

describe('Chassi', () => {
    describe('deveria ser criado com', () => {
        it('"ABCD1234EFGR6549A"', async () => {
            const chassi = await Chassi.criar('ABCD1234EFGR6549A', checadorDeChassi)

            assert.equal(chassi.valor, 'ABCD1234EFGR6549A')
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('"ABCD1234EFGR6549AB"', async () => await FalharEmCriarChassi('ABCD1234EFGR6549AB'))
        it('"abcd1234EFGR6549a"', async () => await FalharEmCriarChassi('abcd1234EFGR6549a'))
        it('"ABCD1234EFGR6549"', async () => await FalharEmCriarChassi('ABCD1234EFGR6549'))
        it('"ABCD1234 FGR6549A"', async () => await FalharEmCriarChassi('ABCD1234 FGR6549A'))
        it('número', async () => await FalharEmCriarChassi(123456789))
        it('nulo', async () => await FalharEmCriarChassi(null))
        it('vazio', async () => await FalharEmCriarChassi(""))
    })
})

async function FalharEmCriarChassi(valor: any) {
    const errorExemplo = new ChassiNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        await Chassi.criar(valor, checadorDeChassi)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}