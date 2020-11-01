import * as koa  from 'koa';
import Router from 'koa-router';
import { ErrorCode } from '../enums/errorCode';
import { HttpException } from '../exceptions/HttpException';

const notFoundRouter = new Router();
notFoundRouter.all('', async(ctx: koa.Context)=>{
   throw new HttpException({status:404,  message:`[${ctx.request.method}][${ctx.request.path}]${ctx.request.path} not supported`, errCode:ErrorCode.NotFoundError});
});
notFoundRouter.all(/\w|/, async(ctx: koa.Context)=>{
    throw new HttpException({status:404,  message:`[${ctx.request.method}][${ctx.request.path}]${ctx.request.path} not supported`, errCode:ErrorCode.NotFoundError});
});
export {notFoundRouter};