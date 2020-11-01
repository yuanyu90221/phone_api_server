import post_phone_schema from '../api_in_schema/post_phoneNumber.json';
import { keyValue } from '../interfaces';
import { validSchema } from './ajv.service';

export const isPostPhoneValid = (paramObj: keyValue) => {
    return validSchema(paramObj, post_phone_schema);
}