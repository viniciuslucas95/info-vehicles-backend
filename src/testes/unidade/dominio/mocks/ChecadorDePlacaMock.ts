import { ChecadorDePlaca } from "../../../../dominio/veiculos/servicos";

export class ChecadorDePlacaMock implements ChecadorDePlaca {
    async checar(valor: string): Promise<void> { }
}