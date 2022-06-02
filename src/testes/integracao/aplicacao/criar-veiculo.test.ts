import assert from 'assert'
import { AdicionarVeiculoComando, AdicionarVeiculoManipuladorDeComando } from '../../../aplicacao/veiculos/adicionar-veiculo'
import { ChecadorDeChassiServico, ChecadorDeIdServico, ChecadorDePlacaServico, ChecadorDeRenavamServico } from '../../../aplicacao/veiculos/servicos'
import { VeiculoNaMemoriaRepositorio } from '../../../infraestrutura/repositorios'

describe("Veiculo", () => {
    it("deveria ser criado", async () => {
        const repositorio = new VeiculoNaMemoriaRepositorio()
        const checadorDeId = new ChecadorDeIdServico(repositorio)
        const checadorDePlaca = new ChecadorDePlacaServico(repositorio)
        const checadorDeChassi = new ChecadorDeChassiServico(repositorio)
        const checadorDeRenavam = new ChecadorDeRenavamServico(repositorio)
        const manipuladorDeComando = new AdicionarVeiculoManipuladorDeComando(
            repositorio,
            checadorDeId,
            checadorDePlaca,
            checadorDeChassi,
            checadorDeRenavam)
        const comando = new AdicionarVeiculoComando('ABC-1234', '9BRBLWHEXG0107721', '123456789', 'Gran Turismo', 'BMW', 2020)
        const result = await manipuladorDeComando.manipular(comando)

        assert.ok(result.id.length > 0)
    })
})