class Logger {
    log(...data: any) {
        console.log(...data);
    }
    warn(...data: any) {
        console.log(...data);
    }
    debug(...data: any) {
        console.debug(...data);
    }
    info(...data: any) {
        console.info(...data);
    }
    error(e:String|Error) {
        console.error(e);
    }
};
const logger = new Logger();
export {logger};