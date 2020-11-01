import * as koa from 'koa';
import {ErrorCode} from '../enums/errorCode';
import { HttpException } from '../exceptions/HttpException';
import { isPostPhoneValid, isPostPhoneValidOut } from '../services';
export const phoneInputChecker = async(ctx: koa.Context, next: () => Promise<any>) => {
    try {
        let {phone} = ctx.request.body;
        const validResult = isPostPhoneValid({phone});
        if (validResult.isValid) {
            ctx.state.phone = phone;
        } else {
           const err = validResult.error;
           const message = err?.message;
           throw new HttpException({status:400, client_message: `[${ctx.request.method}][${ctx.request.path}][phoneInputChecker]:input data error, please check your input`,message: message? message: '', errCode: ErrorCode.PhoneInputError});
        }
        await next(); 
    } catch (err) {
        const message = err.message? err.message: err.toString();
        if (err.name !== 'HttpExcepiton') {
         err = new HttpException({status:500, errCode: ErrorCode.Unknown, message});   
        }
        throw err;
    }
};

export const phoneOutputChecker = async(ctx: koa.Context) => {
    try {
        let {phoneFormat} = ctx.state;
        const validResult = isPostPhoneValidOut({phone:phoneFormat});
        if (!validResult.isValid) {
           const err = validResult.error;
           const message = err?.message;
           throw new HttpException({status:500, client_message: `[${ctx.request.method}][${ctx.request.path}][phoneOutputChecker]: output api error, please contact us.`,message: message? message: '', errCode: ErrorCode.PhoneOutputError});
        }
        ctx.status = 200;
        ctx.body = { phone: phoneFormat};
    } catch (err) {
        const message = err.message? err.message: err.toString();
        if (err.name !== 'HttpExcepiton') {
         err = new HttpException({status:500, errCode: ErrorCode.Unknown, message});   
        }
        throw err;
    }
};