import * as koa from 'koa';
export declare const loggerMiddleware: (ctx: koa.Context, next: () => Promise<any>) => Promise<void>;
