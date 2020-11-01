import { ErrorCode } from "../enums/errorCode";
import { httpExceptionInput } from "../interfaces/httpException.interface";
import { Logger } from "../lib/logger";
export declare class HttpException extends Error {
    status: number;
    errCode: ErrorCode;
    client_message: string;
    message: string;
    constructor(input: httpExceptionInput);
    logAll(logger: Logger): void;
}
