import { Id, Placa, Renavam } from '../value-objects'

export class Veiculo {
    constructor(
        private id: Id,
        private placa: Placa,
        private renavam: Renavam) { }

    getId = () => this.id.valor
    getPlaca = () => this.placa.valor
    getRenavam = () => this.renavam.valor
}