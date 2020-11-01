import { ErrorCode } from '../server/enums/errorCode';
import {HttpException} from '../server/exceptions/HttpException';
import { logger } from '../server/lib/logger';
test('httpException', async(done)=>{
    try {
        const err = new HttpException({status:404, message:'not found', errCode: ErrorCode.NotFoundError});
        logger.info(err);
    } catch (err) {
        logger.info(err);
    } finally {
        done();
    }
})