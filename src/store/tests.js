import { makeAutoObservable } from 'mobx';
import { emailValidator, fullNameValidator, phoneNumberFormatValidator } from '../shared/validators';

export default class Order {

    form = {
        name: {
            name: "name",
            label: "Full Name",
            value: "",
            valid: false,
            pattern: fullNameValidator
        },
        phone: {
            name: "phone",
            label: "Phone",
            value: "",
            valid: false,
            pattern: phoneNumberFormatValidator
        },
        email: {
            name: "email",
            label: "Email",
            value: "",
            valid: false,
            pattern: emailValidator
        },
    };

    get formValid() {
        const test = Object.values(this.form).every(f => f.valid);;
        console.log(test);
        return test;
    }

    get data() {
        let res = {};

        Object.entires(this.form).forEach(field => {
            res[field[1].name] = field[1].value;
        });

        return res;
    }

    update = (name, value) => {
        let field = this.form[name];

        if (field !== undefined) {
            field.value = value.trim();
            field.valid = field.pattern(field.value);
        }
    }

    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;

        makeAutoObservable(this);
    }
}
