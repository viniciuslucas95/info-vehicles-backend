import assert from 'assert'
import { MarcaNoFormatoErradoErro } from '../../../dominio/veiculos/erros'
import { Marca } from '../../../dominio/veiculos/objetos-de-valor'

describe('Marca', () => {
    describe('deveria ser criada com', () => {
        it('"BMW"', () => {
            const marca = Marca.criar('BMW')

            assert.equal(marca.valor, 'BMW')
        })

        it('"Peugeot"', () => {
            const marca = Marca.criar('Peugeot')

            assert.equal(marca.valor, 'Peugeot')
        })
    })

    describe('NÃO deveria ser criada com', () => {
        it('"A"', () => FalharEmCriarMarca('A'))
        it('" BMW"', () => FalharEmCriarMarca(' BMW'))
        it('"BMW "', () => FalharEmCriarMarca('BMW '))
        it('"A TEXTO"', () => FalharEmCriarMarca('A TEXTO'))
        it('"TEXTO A"', () => FalharEmCriarMarca('TEXTO A'))
        it('número', () => FalharEmCriarMarca(123456789))
        it('nulo', () => FalharEmCriarMarca(null))
        it('vazio', () => FalharEmCriarMarca(""))
    })
})

function FalharEmCriarMarca(valor: any) {
    const errorExemplo = new MarcaNoFormatoErradoErro()
    let errorRecebido!: Error

    try {
        Marca.criar(valor)
    } catch (error: unknown) {
        errorRecebido = <Error>error
    }

    assert.equal(errorRecebido.name, errorExemplo.name)
    assert.equal(errorRecebido.message, errorExemplo.message)
}