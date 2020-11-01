import Ajv from 'ajv';
import { keyValue } from '../interfaces';
export declare const validSchema: (paramObj: keyValue | [], schema: keyValue) => {
    isValid: boolean;
    error: Ajv.ErrorObject | null;
};
