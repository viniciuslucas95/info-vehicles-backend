import assert from 'assert'
import { ChassiNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Chassi } from '../../../dominio/veiculos/objetos-de-valor'

describe('Chassi', () => {
    describe('deveria ser criado com', () => {
        it('"ABCD1234EFGR6549A"', () => {
            const chassi = new Chassi('ABCD1234EFGR6549A')

            assert.equal(chassi.valor, 'ABCD1234EFGR6549A')
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('"ABCD1234EFGR6549AB"', () => FalharEmCriarChassi('ABCD1234EFGR6549AB'))
        it('"abcd1234EFGR6549a"', () => FalharEmCriarChassi('abcd1234EFGR6549a'))
        it('"ABCD1234EFGR6549"', () => FalharEmCriarChassi('ABCD1234EFGR6549'))
        it('"ABCD1234 FGR6549A"', () => FalharEmCriarChassi('ABCD1234 FGR6549A'))
        it('número', () => FalharEmCriarChassi(123456789))
        it('nulo', () => FalharEmCriarChassi(null))
        it('vazio', () => FalharEmCriarChassi(""))
    })
})

function FalharEmCriarChassi(valor: any) {
    const errorExemplo = new ChassiNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        new Chassi(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}