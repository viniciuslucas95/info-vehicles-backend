import { Repositorio } from "../nucleo-compartilhado";
import { Chassi, Placa, Renavam } from "./objetos-de-valor";
import { Veiculo } from "./Veiculo";

export interface VeiculoRepositorio extends Repositorio<Veiculo> {
    pegarUmPelaPlaca(placa: Placa): Promise<Veiculo | undefined>
    pegarUmPeloChassi(chassi: Chassi): Promise<Veiculo | undefined>
    pegarUmPeloRenavam(renavam: Renavam): Promise<Veiculo | undefined>
}