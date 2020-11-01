import * as koa from 'koa';
import compose from 'koa-compose';
import {phoneInputChecker, phoneOutputChecker} from '../middleware/phonenumber.handler';
import {phoneParseFunc} from '../services/phonenumber.service';
import { HttpException } from '../exceptions/HttpException';
import { ErrorCode } from '../enums/errorCode';
import { logger } from '../lib/logger';
import { ERRORS } from '../enums/errorName';

export const phoneNumberController = compose([phoneInputChecker, async(ctx: koa.Context, next:()=>Promise<any>) =>{
    try {
        const {phone} = ctx.state;
        const result = phoneParseFunc({phone, country:''});
       ctx.state.phoneFormat = result.phoneNumber?.formatNational(); 
        await next();
    } catch (err) {
        if (err.name !== ERRORS.HttpException) {
            err = new HttpException({status:500, message:err.message, client_message:`[${ctx.request.method}][${ctx.request.path}][phoneNumberController]`, errCode: ErrorCode.PhoneControllerError })
        }
        throw err;
    }
},phoneOutputChecker])