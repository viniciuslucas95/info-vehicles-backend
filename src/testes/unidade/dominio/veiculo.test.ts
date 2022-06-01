import assert from 'assert'
import { Ano, Chassi, Marca, Modelo, Placa, Renavam } from '../../../dominio/veiculos/objetos-de-valor'
import { Id } from '../../../dominio/nucleo-compartilhado'
import { Veiculo } from '../../../dominio/veiculos'
import { ChecadorIdVeiculo } from '../../../aplicacao/servicos'
import { VeiculoNaMemoriaRepositorio } from '../../../infraestrutura/repositorios/VeiculoNaMemoriaRepositorio'

describe('Veículo', () => {
    describe('deveria', () => {
        it('ser criado', async () => {
            const id = new Id()
            const placa = new Placa('ABC-1234')
            const chassi = new Chassi('9BRBLWHEXG0107721')
            const renavam = new Renavam('123456789')
            const modelo = new Modelo('Gran Turismo')
            const marca = new Marca('BMW')
            const ano = new Ano(2020)
            const repositorio = new VeiculoNaMemoriaRepositorio()
            const checador = new ChecadorIdVeiculo(repositorio)
            const veiculo = await Veiculo.Create(id, placa, chassi, renavam, modelo, marca, ano, checador)

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