export interface ChecadorDeVeiculoId {
    checar(id: string): Promise<void>
}