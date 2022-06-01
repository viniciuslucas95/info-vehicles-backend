import assert from 'assert'
import { ChassiNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Chassi } from '../../../domain/veiculos/value-objects'

describe('Chassi', () => {
    describe('deveria', () => {
        it('ser criado com "ABCD1234EFGR6549A"', () => {
            const chassi = new Chassi('ABCD1234EFGR6549A')

            assert.equal(chassi.valor, 'ABCD1234EFGR6549A')
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "ABCD1234EFGR6549AB"', () => FalharEmCriarChassi('ABCD1234EFGR6549AB'))
        it('ser criado com "ABCD1234EFGR6549"', () => FalharEmCriarChassi('ABCD1234EFGR6549'))
        it('ser criado com "ABCD1234 FGR6549A"', () => FalharEmCriarChassi('ABCD1234 FGR6549A'))
        it('ser criado com número', () => FalharEmCriarChassi(123456789))
        it('ser criado com nulo', () => FalharEmCriarChassi(null))
        it('ser criado com vazio', () => FalharEmCriarChassi(""))
    })
})

function FalharEmCriarChassi(valor: any) {
    const errorExemplo = new ChassiNoFormatoErradoError()
    let errorRecebido!: Error

    try {
        new Chassi(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}