import {config} from '../server/config';
import {logger} from '../server/lib/logger';
test('config_test', async(done) => {
    try {
        expect(config.NODE_ENV).toBeTruthy();
        expect(config.PORT).toBeTruthy();
        expect(config.APP_NAME).toBeTruthy()
    } catch(err) {
        logger.error(err);
    } finally {
        done();
    }
})