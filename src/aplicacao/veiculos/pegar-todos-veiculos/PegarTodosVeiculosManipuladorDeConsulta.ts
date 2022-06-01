import { VeiculoRepositorio } from "../../../dominio/veiculos";
import { ManipuladorDeConsulta } from "../../configuracoes/consultas";
import { PegarTodosVeiculosConsulta } from "./PegarTodosVeiculosConsulta";
import { TodosVeiculosDto } from "./TodosVeiculosDto";

export class PegarTodosVeiculosManipuladorDeConsulta implements ManipuladorDeConsulta<PegarTodosVeiculosConsulta, TodosVeiculosDto>{
    constructor(private readonly repositorio: VeiculoRepositorio) { }

    async manipular(valor: PegarTodosVeiculosConsulta): Promise<TodosVeiculosDto[]> {
        const resultado = await this.repositorio.pegarTodos()

        return resultado.map(veiculo => new TodosVeiculosDto(veiculo.id, veiculo.placa, veiculo.chassi, veiculo.renavam, veiculo.modelo, veiculo.marca, veiculo.ano))
    }
}