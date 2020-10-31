import {CountryCode} from 'libphonenumber-js';
export interface phoneInput {
    phone: string,
    country: CountryCode | ''
};