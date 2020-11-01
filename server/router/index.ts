import Router from 'koa-router';
import { notFoundRouter } from './notFound.router';
import {phoneNumberRouter} from './phoneNumber.router';

const rootRouter = new Router();
rootRouter.use(phoneNumberRouter.routes())
// .use(notFoundRouter.routes());
export {rootRouter};