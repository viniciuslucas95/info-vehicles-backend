import { ChecadorDeRenavam } from "../../../../dominio/veiculos/servicos";

export class ChecadorDeRenavamMock implements ChecadorDeRenavam {
    async checar(valor: string): Promise<void> { }
}