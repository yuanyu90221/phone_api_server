import  koa from 'koa';
import  cors  from '@koa/cors';
import path from 'path';
import favicon from 'koa-favicon';
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import  koaJson from 'koa-json';
import {loggerMiddleware, errorMiddleware} from './middleware';
import {rootRouter} from './router/index';
import { notFoundRouter } from './router/notFound.router';
const app = new  koa();
app.use(helmet()).use(favicon(path.join(__dirname, 'static', 'favicon/favicon.ico'))).use(cors()).use(koaBody()).use(koaJson())
.use(loggerMiddleware)
.use(errorMiddleware)
.use(rootRouter.routes())
.use(notFoundRouter.routes());
export {app}