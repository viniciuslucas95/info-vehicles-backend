import assert from 'assert'
import { Veiculo } from '../../../domain/veiculos'
import { Ano, Chassi, Id, Marca, Modelo, Placa, Renavam } from '../../../domain/veiculos/value-objects'

describe('Veículo', () => {
    describe('deveria', () => {
        it('ser criado', () => {
            const id = new Id()
            const placa = new Placa('ABC-1234')
            const chassi = new Chassi('9BRBLWHEXG0107721')
            const renavam = new Renavam('123456789')
            const modelo = new Modelo('Gran Turismo')
            const marca = new Marca('BMW')
            const ano = new Ano(2020)
            const veiculo = new Veiculo(id, placa, chassi, renavam, modelo, marca, ano)

            assert.ok(veiculo.id.length > 0)
            assert.equal(veiculo.placa, 'ABC-1234')
            assert.equal(veiculo.chassi, '9BRBLWHEXG0107721')
            assert.equal(veiculo.renavam, '123456789')
            assert.equal(veiculo.modelo, 'Gran Turismo')
            assert.equal(veiculo.marca, 'BMW')
            assert.equal(veiculo.ano, 2020)
        })
    })
})