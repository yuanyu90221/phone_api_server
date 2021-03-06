import * as koa from 'koa';
import {ErrorCode} from '../enums/errorCode';
import { logger } from '../lib/logger';

export const errorMiddleware = async (ctx: koa.Context, next: ()=>Promise<any>) => {
    try {
        await next(); 
    } catch (error) {
        const status = error.status ? error.status: 500;
        const message = error.client_message ? error.client_message: error.message ? error.message : 'something went wrong, please contact us.';
        const errCode = error.errCode ? error.errCode: ErrorCode.Unknown;
        ctx.status = status;
        ctx.body = {message, errCode, status};
        ctx.state.errorCode = errCode;
    }
}