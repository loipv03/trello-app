export interface IError {
    data: {
        errors?: string[],
        message: string
    },
    status: number
}