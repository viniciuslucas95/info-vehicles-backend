import assert from 'assert'
import { Veiculo } from '../../../core/entities'
import { Id, Placa, Renavam } from '../../../core/value-objects'

describe('Veículo', () => {
    describe('deveria', () => {
        it('ser criado', () => {
            const id = new Id()
            const placa = new Placa('ABC-1234')
            const renavam = new Renavam('123456789')
            const veiculo = new Veiculo(id, placa, renavam)

            assert.ok(veiculo.getId())
            assert.ok(veiculo.getPlaca())
            assert.ok(veiculo.getRenavam())
        })
    })
})