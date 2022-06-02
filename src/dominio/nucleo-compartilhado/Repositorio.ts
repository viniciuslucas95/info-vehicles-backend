import { RaizAgregada } from "./RaizAgregada";

export interface Repositorio<T extends RaizAgregada> {
    adicionarOuAtualizar(valor: T): Promise<void>
    deletar(id: string): Promise<void>
    pegarUm(id: string): Promise<T | undefined>
    pegarTodos(): Promise<T[]>
}