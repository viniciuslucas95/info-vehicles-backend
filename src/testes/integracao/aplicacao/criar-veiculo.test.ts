import assert from 'assert'
import { AdicionarOuAtualizarVeiculoComando, AdicionarOuAtualizarVeiculoManipuladorDeComando } from '../../../aplicacao/veiculos/adicionar-ou-atualizar-veiculo'
import { ChecadorDeVeiculoChassiServico, ChecadorDeVeiculoIdServico, ChecadorDeVeiculoPlacaServico, ChecadorDeVeiculoRenavamServico } from '../../../aplicacao/veiculos/servicos'
import { VeiculoNaMemoriaRepositorio } from '../../../infraestrutura/repositorios'

describe("Veiculo", () => {
    it("deveria ser criado", async () => {
        const repositorio = new VeiculoNaMemoriaRepositorio()
        const checadorDeId = new ChecadorDeVeiculoIdServico(repositorio)
        const checadorDePlaca = new ChecadorDeVeiculoPlacaServico(repositorio)
        const checadorDeChassi = new ChecadorDeVeiculoChassiServico(repositorio)
        const checadorDeRenavam = new ChecadorDeVeiculoRenavamServico(repositorio)
        const manipuladorDeComando = new AdicionarOuAtualizarVeiculoManipuladorDeComando(
            repositorio,
            checadorDeId,
            checadorDePlaca,
            checadorDeChassi,
            checadorDeRenavam)
        const comando = new AdicionarOuAtualizarVeiculoComando('ABC-1234', '9BRBLWHEXG0107721', '123456789', 'Gran Turismo', 'BMW', 2020)
        const result = await manipuladorDeComando.manipular(comando)

        assert.ok(result.id.length > 0)
    })
})