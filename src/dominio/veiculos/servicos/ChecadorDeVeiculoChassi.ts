import { Chassi } from "../objetos-de-valor";

export interface ChecadorDeVeiculoChassi {
    checar(id: Chassi): Promise<void>
}