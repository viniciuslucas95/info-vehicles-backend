import assert from 'assert'
import { ModeloNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Modelo } from '../../../dominio/veiculos/objetos-de-valor'

describe('Modelo', () => {
    describe('deveria ser criado com', () => {
        it('"Gran Turismo"', () => {
            const modelo = Modelo.criar('Gran Turismo')

            assert.equal(modelo.valor, 'Gran Turismo')
        })

        it('"i3"', () => {
            const modelo = Modelo.criar('i3')

            assert.equal(modelo.valor, 'i3')
        })
    })

    describe('NÃO deveria ser criado com', () => {
        it('"A "', () => FalharEmCriarModelo('A '))
        it('" A"', () => FalharEmCriarModelo(' A'))
        it('"A  B"', () => FalharEmCriarModelo('A  B'))
        it('número', () => FalharEmCriarModelo(123456789))
        it('nulo', () => FalharEmCriarModelo(null))
        it('vazio', () => FalharEmCriarModelo(""))
    })
})

function FalharEmCriarModelo(valor: any) {
    const errorExemplo = new ModeloNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        Modelo.criar(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}