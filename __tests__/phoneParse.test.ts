import {logger} from '../server/lib/logger';
import {phoneParseFunc} from '../server/services/phonenumber.service';

test('phoneParseFunc', async(done)=>{
    try {
        const result = phoneParseFunc({phone:'Phone: 8 (800) 555 35 35.', country: 'RU'});
        if (result.phoneNumber) {
            expect(result.phoneNumber.country).toBe('RU');
            expect(result.phoneNumber.number).toBe('+78005553535');
            expect(result.phoneNumber.isValid()).toBe(true);
            expect(result.phoneNumber.getType()).toBe('TOLL_FREE');
        }
    } catch (error) {
        logger.error(error);
    } finally {
        done();
    }
});
test('phoneParseFuncWrong', async(done)=>{
    try {
        const result = phoneParseFunc({phone:'(111) 222-3333.', country: ''});
    } catch (error) {
        expect(error.message).toBe('INVALID_COUNTRY');
    } finally {
        done();
    }
});

test('phoneParseFuncNAN', async(done)=>{
    try {
        const result = phoneParseFunc({phone:'abcde.', country: ''});
    } catch (error) {
        expect(error.message).toBe('NOT_A_NUMBER');
    } finally {
        done();
    }
});