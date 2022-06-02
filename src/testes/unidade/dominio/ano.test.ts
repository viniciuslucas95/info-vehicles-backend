import assert from 'assert'
import { AnoNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Ano } from '../../../dominio/veiculos/objetos-de-valor'

describe('Ano', () => {
    describe('deveria ser criado com', () => {
        it('2000', () => {
            const modelo = Ano.criar(2000)

            assert.equal(modelo.valor, 2000)
        })

        it('1990', () => {
            const modelo = Ano.criar(1990)

            assert.equal(modelo.valor, 1990)
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('1800', () => FalharEmCriarAno(1800))
        it('ano atual + 1', () => FalharEmCriarAno(new Date().getFullYear() + 1))
        it('"1800"', () => FalharEmCriarAno("1800"))
        it('nulo', () => FalharEmCriarAno(null))
        it('vazio', () => FalharEmCriarAno(""))
    })
})

function FalharEmCriarAno(valor: any) {
    const errorExemplo = new AnoNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        Ano.criar(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}