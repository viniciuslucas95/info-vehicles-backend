import assert from 'assert'
import { MarcaNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Marca } from '../../../domain/veiculos/value-objects'

describe('Marca', () => {
    describe('deveria', () => {
        it('ser criado com "BMW"', () => {
            const modelo = new Marca('BMW')

            assert.ok(modelo.valor)
        })

        it('ser criado com "Peugeot"', () => {
            const modelo = new Marca('Peugeot')

            assert.ok(modelo.valor)
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "A"', () => FalharEmCriarModelo('A'))
        it('ser criado com " BMW"', () => FalharEmCriarModelo(' BMW'))
        it('ser criado com "BMW "', () => FalharEmCriarModelo('BMW '))
        it('ser criado com "A TEXTO"', () => FalharEmCriarModelo('A TEXTO'))
        it('ser criado com "TEXTO A"', () => FalharEmCriarModelo('TEXTO A'))
        it('ser criado com número', () => FalharEmCriarModelo(123456789))
        it('ser criado com nulo', () => FalharEmCriarModelo(null))
        it('ser criado com vazio', () => FalharEmCriarModelo(""))
    })
})

function FalharEmCriarModelo(valor: any) {
    const errorExemplo = new MarcaNoFormatoErradoError()
    let errorRecebido!: Error

    try {
        new Marca(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}