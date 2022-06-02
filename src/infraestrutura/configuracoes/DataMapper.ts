export interface DataMapper<Data, Result> {
    map(data: Data): Result
}