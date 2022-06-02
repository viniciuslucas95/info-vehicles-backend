import { ChecadorDeId } from "../../../../dominio/nucleo-compartilhado";

export class ChecadorDeIdMock implements ChecadorDeId {
    async checar(valor: string): Promise<void> { }
}