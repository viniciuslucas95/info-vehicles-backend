import assert from 'assert'
import { Veiculo } from '../../../domain/veiculos'
import { Id, Modelo, Placa, Renavam } from '../../../domain/veiculos/value-objects'

describe('Veículo', () => {
    describe('deveria', () => {
        it('ser criado', () => {
            const id = new Id()
            const placa = new Placa('ABC-1234')
            const renavam = new Renavam('123456789')
            const modelo = new Modelo('Camaro')
            const veiculo = new Veiculo(id, placa, renavam, modelo)

            assert.ok(veiculo.id)
            assert.ok(veiculo.placa)
            assert.ok(veiculo.renavam)
            assert.ok(veiculo.modelo)
        })
    })
})