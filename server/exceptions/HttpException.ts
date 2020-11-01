import { ErrorCode } from "../enums/errorCode";
import { httpExceptionInput } from "../interfaces/httpException.interface";
import {Logger} from "../lib/logger";
export class HttpException extends Error {
    status: number;
    errCode: ErrorCode;
    client_message: string;
    message: string;
    constructor (input: httpExceptionInput) {
        super(input.message);
        this.name = 'HttpException';
        this.status = input.status;
        this.message = input.message;
        this.errCode = input.errCode;
        this.client_message = input.client_message ? input.client_message: input.message;
    }
    logAll(logger: Logger) {
        logger.info(JSON.stringify(this));
    }
}