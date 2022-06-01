import { Id } from "../../nucleo-compartilhado";

export interface ChecadorDeVeiculoId {
    checar(id: Id): Promise<void>
}