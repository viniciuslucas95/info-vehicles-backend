export interface ChecadorDeSingularidade<T> {
    checar(valor: T): Promise<void>;
}