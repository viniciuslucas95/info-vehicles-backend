import { Repositorio } from "../nucleo-compartilhado";
import { Veiculo } from "./Veiculo";

export interface VeiculoRepositorio extends Repositorio<Veiculo> {
    pegarUmPelaPlaca(placa: string): Promise<Veiculo | undefined>
    pegarUmPeloChassi(chassi: string): Promise<Veiculo | undefined>
    pegarUmPeloRenavam(renavam: string): Promise<Veiculo | undefined>
}