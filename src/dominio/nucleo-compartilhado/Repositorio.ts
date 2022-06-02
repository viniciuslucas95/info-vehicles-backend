import { RaizAgregada } from "./RaizAgregada";

export interface Repositorio<T extends RaizAgregada> {
    pegarUm(id: string): Promise<T | undefined>
    pegarTodos(): Promise<T[]>
    adicionarOuAtualizar(valor: T): Promise<void>
}