import { RaizAgregada, Id } from '../nucleo-compartilhado';
import { Marca, Modelo, Placa, Renavam, Ano, Chassi } from './objetos-de-valor'

export class Veiculo extends RaizAgregada {
    private constructor(
        id: Id,
        private _placa: Placa,
        private _chassi: Chassi,
        private _renavam: Renavam,
        private _modelo: Modelo,
        private _marca: Marca,
        private _ano: Ano) {
        super(id)
    }

    public get placa() {
        return this._placa.valor
    }

    public get chassi() {
        return this._chassi.valor
    }

    public get renavam() {
        return this._renavam.valor
    }

    public get modelo() {
        return this._modelo.valor
    }

    public get marca() {
        return this._marca.valor
    }

    public get ano() {
        return this._ano.valor
    }

    public trocarPlaca(placa: Placa) {
        this._placa = placa
    }

    public trocarChassi(chassi: Chassi) {
        this._chassi = chassi
    }

    public trocarRenavam(renavam: Renavam) {
        this._renavam = renavam
    }

    public trocarModelo(modelo: Modelo) {
        this._modelo = modelo
    }

    public trocarMarca(marca: Marca) {
        this._marca = marca
    }

    public trocarAno(ano: Ano) {
        this._ano = ano
    }

    public static criar(
        id: Id,
        placa: Placa,
        chassi: Chassi,
        renavam: Renavam,
        modelo: Modelo,
        marca: Marca,
        ano: Ano) {
        return new Veiculo(id, placa, chassi, renavam, modelo, marca, ano)
    }
}