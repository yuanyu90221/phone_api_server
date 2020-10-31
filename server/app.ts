import  koa from 'koa';
import  cors  from '@koa/cors';
import koaBody from 'koa-body';
import  koaJson from 'koa-json';
import {loggerMiddleware, errorMiddleware} from './middleware'
const app = new  koa();
app.use(cors()).use(koaBody()).use(koaJson())
.use(loggerMiddleware).use(errorMiddleware)
export {app}