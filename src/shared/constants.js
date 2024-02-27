import { emailValidator, fullNameValidator, phoneNumberFormatValidator } from './validators';

export const columns = ["Title", "Price", "", "Sum", "Delete"];

export const products = [
    {
        id: 100,
        title: "Kuba",
        price: 100,
        rest: 10,
        cnt: 0,
    },
    {
        id: 101,
        title: "Kola",
        price: 100,
        rest: 17,
        cnt: 0,
    },
    {
        id: 103,
        title: "Duba",
        price: 120,
        rest: 10,
        cnt: 0,
    },
    {
        id: 104,
        title: "Buba",
        price: 179,
        rest: 12,
        cnt: 0,
    },
    {
        id: 105,
        title: "Trololo",
        price: 180,
        rest: 19,
        cnt: 0,
    },
    {
        id: 109,
        title: "Check",
        price: 110,
        rest: 11,
        cnt: 0,
    },
    {
        id: 110,
        title: "Sound",
        price: 89,
        rest: 8,
        cnt: 0,
    },
];

export const fields = [
    {
        name: "name",
        label: "Full Name",
        value: "",
        valid: false,
        validator: fullNameValidator,
    },
    {
        name: "email",
        label: "Email",
        value: "",
        valid: false,
        validator: emailValidator,
    },
    {
        name: "phone",
        label: "Phone",
        value: "",
        valid: false,
        validator: phoneNumberFormatValidator,
    },
];
