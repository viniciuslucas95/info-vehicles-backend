import { Placa } from "../objetos-de-valor";

export interface ChecadorDeVeiculoPlaca {
    checar(id: Placa): Promise<void>
}