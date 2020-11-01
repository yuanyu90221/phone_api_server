import  koa from 'koa';
import  cors  from '@koa/cors';
import path from 'path';
import favicon from 'koa-favicon';
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import  koaJson from 'koa-json';
import * as swagger2 from 'swagger2';
import {ui, validate} from 'swagger2-koa';
import {loggerMiddleware, errorMiddleware} from './middleware';
import {rootRouter} from './router/index';
import { notFoundRouter } from './router/notFound.router';
import { logger } from './lib/logger';
const swaggerDocument:any = swagger2.loadDocumentSync(path.join(__dirname, 'api.yml'));
// logger.info(swaggerDocument);
const app = new  koa();
app.use(favicon(path.join(__dirname, 'static', 'favicon/favicon.ico'))).use(cors()).use(koaBody()).use(koaJson())
.use(loggerMiddleware)
.use(errorMiddleware)
.use(rootRouter.routes())
.use(ui(swaggerDocument, "/api/swagger")).use(validate(swaggerDocument))
.use(notFoundRouter.routes());
export {app}