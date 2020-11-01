import post_phone_schema from '../api_out_schema/post_phoneNumber.json';
import { keyValue } from '../interfaces';
import {validSchema} from '../services/ajv.service';

export const isPostPhoneValidOut = (paramObj: keyValue) => {
    return validSchema(paramObj, post_phone_schema);
}