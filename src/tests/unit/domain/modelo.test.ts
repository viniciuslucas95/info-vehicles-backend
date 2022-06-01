import assert from 'assert'
import { ModeloNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Modelo } from '../../../domain/veiculos/value-objects'

describe('Modelo', () => {
    describe('deveria', () => {
        it('ser criado com "Camaro"', () => {
            const modelo = new Modelo('Camaro')

            assert.ok(modelo.valor)
        })

        it('ser criado com "Fiat Uno"', () => {
            const modelo = new Modelo('Fiat Uno')

            assert.ok(modelo.valor)
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "AB"', () => FalharEmCriarModelo('AB'))
        it('ser criado com "AB CDE"', () => FalharEmCriarModelo('AB CDE'))
        it('ser criado com " ABC"', () => FalharEmCriarModelo(' ABC'))
        it('ser criado com "ABC "', () => FalharEmCriarModelo('ABC '))
        it('ser criado com "Fiat  Uno"', () => FalharEmCriarModelo('Fiat  Uno'))
        it('ser criado com "Fi Un"', () => FalharEmCriarModelo('Fi Un'))
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