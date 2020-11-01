import * as koa from 'koa';
export declare const errorMiddleware: (ctx: koa.Context, next: () => Promise<any>) => Promise<void>;
