import assert from 'assert'
import { AnoNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Ano } from '../../../dominio/veiculos/objetos-de-valor'

describe('Ano', () => {
    describe('deveria', () => {
        it('ser criado com 2000', () => {
            const modelo = new Ano(2000)

            assert.equal(modelo.valor, 2000)
        })

        it('ser criado com 1990', () => {
            const modelo = new Ano(1990)

            assert.equal(modelo.valor, 1990)
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com 1800', () => FalharEmCriarAno(1800))
        it('ser criado com ano atual + 1', () => FalharEmCriarAno(new Date().getFullYear() + 1))
        it('ser criado com "1800"', () => FalharEmCriarAno("1800"))
        it('ser criado com nulo', () => FalharEmCriarAno(null))
        it('ser criado com vazio', () => FalharEmCriarAno(""))
    })
})

function FalharEmCriarAno(valor: any) {
    const errorExemplo = new AnoNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        new Ano(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}