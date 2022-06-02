import { ChecadorDeChassi } from "../../../../dominio/veiculos/servicos";

export class ChecadorDeChassiMock implements ChecadorDeChassi {
    async checar(valor: string): Promise<void> { }
}