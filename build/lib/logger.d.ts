declare class Logger {
    log(...data: any): void;
    warn(...data: any): void;
    debug(...data: any): void;
    info(...data: any): void;
    error(e: String | Error): void;
}
declare const logger: Logger;
export { logger, Logger };
