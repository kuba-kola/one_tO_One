export const emailValidator = email => (
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)
);

export const fullNameValidator = name => (
  /^\w+\s.*\w+$/.test(name.trim())
);

export const phoneNumberFormatValidator = phoneNumber => (
  /^[\d\-\s]{7,12}$/.test(phoneNumber.trim())
);
