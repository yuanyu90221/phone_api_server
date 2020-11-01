import * as koa from 'koa';
import {logger} from '../lib/logger';
export const loggerMiddleware = async (ctx:koa.Context, next:()=>Promise<any>) => {
    try {
        await next();
        let {status, body, state} = ctx;
        // logger.info(body, status, state);
        let message = body.message;
        if (typeof message !== 'string' && message) {
            message = JSON.stringify(message);
        } else {
            message = body? body.message: state ? JSON.stringify(state): 'no body message';
        }
        switch (true) {
            case status >= 500:
                logger.error(`[${ctx.request.method}][${ctx.request.path}] status: ${status}, message: ${message}, errCode: ${body.errCode}`)
                break;
            case status >= 400:
                logger.warn(`[${ctx.request.method}][${ctx.request.path}] status: ${status}, message: ${message}, errCode: ${body.errCode}`);
                break;
            default:
                logger.info(`[${ctx.request.method}][${ctx.request.path}] status: ${status}, message: ${message}`); 
        }
    } catch (error) {
        throw error;
    }
}