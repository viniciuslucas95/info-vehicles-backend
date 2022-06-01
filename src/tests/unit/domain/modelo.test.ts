import assert from 'assert'
import { ModeloNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Modelo } from '../../../domain/veiculos/value-objects'

describe('Modelo', () => {
    describe('deveria', () => {
        it('ser criado com "Gran Turismo"', () => {
            const modelo = new Modelo('Gran Turismo')

            assert.equal(modelo.valor, 'Gran Turismo')
        })

        it('ser criado com "i3"', () => {
            const modelo = new Modelo('i3')

            assert.equal(modelo.valor, 'i3')
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "A "', () => FalharEmCriarModelo('A '))
        it('ser criado com " A"', () => FalharEmCriarModelo(' A'))
        it('ser criado com "A  B"', () => FalharEmCriarModelo('A  B'))
        it('ser criado com número', () => FalharEmCriarModelo(123456789))
        it('ser criado com nulo', () => FalharEmCriarModelo(null))
        it('ser criado com vazio', () => FalharEmCriarModelo(""))
    })
})

function FalharEmCriarModelo(valor: any) {
    const errorExemplo = new ModeloNoFormatoErradoError()
    let errorRecebido!: Error

    try {
        new Modelo(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}