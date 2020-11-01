import Ajv from 'ajv';
import { keyValue } from '../interfaces';

export const validSchema = (paramObj: keyValue|[], schema: keyValue) => {
    const ajv = new Ajv({allErrors: true});
    const valid = ajv.validate(schema, paramObj);
    return valid? {isValid:true, error:null}:{isValid: false, error: ajv.errors?ajv.errors[0]:null};
}