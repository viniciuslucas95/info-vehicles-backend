import { Renavam } from "../objetos-de-valor";

export interface ChecadorDeVeiculoRenavam {
    checar(id: Renavam): Promise<void>
}