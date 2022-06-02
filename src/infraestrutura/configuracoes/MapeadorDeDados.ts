export interface MapeadorDeDados<Dados, Resultado> {
    mapear(dados: Dados): Resultado
}