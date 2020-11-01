import supertest from 'supertest';
import {app} from '../server/app';
import { logger } from '../server/lib/logger';

const request = supertest(app.callback());
test('supertest_wrong', async(done)=>{
    request.post('/phone')
    .send({phone: ''})
    .set('Accept', 'application/json')
    .expect(400)
    .end(function(err, res){
        if (err) return done(err);
        logger.info(res.body);
        done();
    });
});
test('supertest', async(done)=>{
    request.post('/phone')
    .send({phone: '+12133734253'})
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res){
        if (err) return done(err);
        expect(res.body.phone).toBe('(213) 373-4253');
        done();
    });
});