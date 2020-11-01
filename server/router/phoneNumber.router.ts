import Router from 'koa-router';
import {phoneNumberController} from '../controller/phone.controller';
const phoneNumberRouter = new Router();
phoneNumberRouter.post('/phone', phoneNumberController);
export {phoneNumberRouter};