import assert from 'assert'
import { MarcaNoFormatoErradoError } from '../../../domain/veiculos/errors'
import { Marca } from '../../../domain/veiculos/value-objects'

describe('Marca', () => {
    describe('deveria', () => {
        it('ser criado com "BMW"', () => {
            const marca = new Marca('BMW')

            assert.equal(marca.valor, 'BMW')
        })

        it('ser criado com "Peugeot"', () => {
            const marca = new Marca('Peugeot')

            assert.equal(marca.valor, 'Peugeot')
        })
    })

    describe('NÃO deveria', () => {
        it('ser criado com "A"', () => FalharEmCriarMarca('A'))
        it('ser criado com " BMW"', () => FalharEmCriarMarca(' BMW'))
        it('ser criado com "BMW "', () => FalharEmCriarMarca('BMW '))
        it('ser criado com "A TEXTO"', () => FalharEmCriarMarca('A TEXTO'))
        it('ser criado com "TEXTO A"', () => FalharEmCriarMarca('TEXTO A'))
        it('ser criado com número', () => FalharEmCriarMarca(123456789))
        it('ser criado com nulo', () => FalharEmCriarMarca(null))
        it('ser criado com vazio', () => FalharEmCriarMarca(""))
    })
})

function FalharEmCriarMarca(valor: any) {
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