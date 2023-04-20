export const extractPhoneNumberFromString = phoneNumberString => (
    [...phoneNumberString.match(/\d+/g)].join('')
);
