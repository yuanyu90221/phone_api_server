import { ErrorCode } from "../enums/errorCode";

export interface httpExceptionInput {
    status: number,
    message: string,
    errCode: ErrorCode,
    client_message?: string
}