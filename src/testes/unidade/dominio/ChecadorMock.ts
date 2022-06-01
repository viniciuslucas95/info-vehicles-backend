import { ChecadorDeVeiculoId } from "../../../dominio/veiculos/servicos"

export class ChecadorMock implements ChecadorDeVeiculoId {
    async checar(valor: unknown): Promise<void> { }
}