import assert from 'assert'
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from '../../../dominio/veiculos/objetos-de-valor'
import { ChecadorDeId, Id } from '../../../dominio/nucleo-compartilhado'
import { Veiculo } from '../../../dominio/veiculos'
import { ChecadorDeIdMock } from './mocks/ChecadorDeIdMock'
import { ChecadorDePlaca, ChecadorDeRenavam, ChecadorDeChassi } from '../../../dominio/veiculos/servicos'
import { ChecadorDePlacaMock, ChecadorDeRenavamMock, ChecadorDeChassiMock } from './mocks'

const checadorDeId: ChecadorDeId = new ChecadorDeIdMock()
const checadorDePlaca: ChecadorDePlaca = new ChecadorDePlacaMock()
const checadorDeRenavam: ChecadorDeRenavam = new ChecadorDeRenavamMock()
const checadorDeChassi: ChecadorDeChassi = new ChecadorDeChassiMock()

describe('Veículo', () => {
    it('deveria ser criado', async () => {
        const id = await Id.criar(checadorDeId)
        const placa = await Placa.criar('ABC-1234', checadorDePlaca)
        const chassi = await Chassi.criar('9BRBLWHEXG0107721', checadorDeChassi)
        const renavam = await Renavam.criar('123456789', checadorDeRenavam)
        const modelo = Modelo.criar('Gran Turismo')
        const marca = Marca.criar('BMW')
        const ano = Ano.criar(2020)
        const veiculo = Veiculo.criar(id, placa, chassi, renavam, modelo, marca, ano)

        assert.ok(veiculo.id.length > 0)
        assert.equal(veiculo.placa, 'ABC-1234')
        assert.equal(veiculo.chassi, '9BRBLWHEXG0107721')
        assert.equal(veiculo.renavam, '123456789')
        assert.equal(veiculo.modelo, 'Gran Turismo')
        assert.equal(veiculo.marca, 'BMW')
        assert.equal(veiculo.ano, 2020)
    })
})