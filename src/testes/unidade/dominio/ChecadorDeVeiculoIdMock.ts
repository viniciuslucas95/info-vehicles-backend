import { ChecadorDeVeiculoId } from "../../../dominio/veiculos/servicos"

export class ChecadorDeVeiculoIdMock implements ChecadorDeVeiculoId {
    async checar(id: string): Promise<void> { }
}