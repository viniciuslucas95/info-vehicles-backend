import assert from 'assert'
import { ManipuladorDeComando } from '../../../aplicacao/configuracoes/comandos'
import { AdicionarVeiculoComando, AdicionarVeiculoManipuladorDeComando } from '../../../aplicacao/veiculos/adicionar-veiculo'
import { AtualizarVeiculoComando, AtualizarVeiculoManipuladorDeComando } from '../../../aplicacao/veiculos/atualizar-veiculo'
import { ChecadorDeChassiServico, ChecadorDeIdServico, ChecadorDePlacaServico, ChecadorDeRenavamServico } from '../../../aplicacao/veiculos/servicos'
import { Veiculo, VeiculoRepositorio } from '../../../dominio/veiculos'
import { Chassi, Placa } from '../../../dominio/veiculos/objetos-de-valor'
import { VeiculoNaMemoriaRepositorio } from '../../../infraestrutura/repositorios'

const repositorio: VeiculoRepositorio = new VeiculoNaMemoriaRepositorio()
const checadorDeId = new ChecadorDeIdServico(repositorio)
const checadorDePlaca = new ChecadorDePlacaServico(repositorio)
const checadorDeChassi = new ChecadorDeChassiServico(repositorio)
const checadorDeRenavam = new ChecadorDeRenavamServico(repositorio)
const adicionarVeiculoManipuladorDeComando =
    new AdicionarVeiculoManipuladorDeComando(
        repositorio,
        checadorDeId,
        checadorDePlaca,
        checadorDeChassi,
        checadorDeRenavam)
const atualizarVeiculoManipuladorDeComando =
    new AtualizarVeiculoManipuladorDeComando(
        repositorio,
        checadorDePlaca,
        checadorDeChassi,
        checadorDeRenavam)
let veiculoId: string

describe('Veiculo', () => {
    before(async () => {
        const comando = new AdicionarVeiculoComando('ABC-1234', '9BRBLWHEXG0107721', '123456789', 'Gran Turismo', 'BMW', 2020)
        const result = await adicionarVeiculoManipuladorDeComando.manipular(comando)

        veiculoId = result.id
    })

    it('deveria ter sua placa atualizada', async () => {
        const atualizacao = await Placa.criar('ZZZ-9999', checadorDePlaca)
        const comando = new AtualizarVeiculoComando(veiculoId, atualizacao.valor)

        await atualizarVeiculoManipuladorDeComando.manipular(comando)
    })

    it('deveria ter seu chassi atualizado', async () => {
        const atualizacao = await Chassi.criar('ABRBLWHEXG0107721', checadorDeChassi)
        const comando = new AtualizarVeiculoComando(veiculoId, undefined, atualizacao.valor)

        await atualizarVeiculoManipuladorDeComando.manipular(comando)
    })
})