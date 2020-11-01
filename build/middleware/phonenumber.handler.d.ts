import * as koa from 'koa';
export declare const phoneInputChecker: (ctx: koa.Context, next: () => Promise<any>) => Promise<void>;
export declare const phoneOutputChecker: (ctx: koa.Context) => Promise<void>;
