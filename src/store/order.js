import { makeAutoObservable } from 'mobx';
import { emailValidator, fullNameValidator, phoneNumberFormatValidator } from '../shared/validators';

export default class Order {

	form = [
		{
			name: "name",
			label: "Full Name",
			value: "",
			valid: false,
			pattern: fullNameValidator,
		},
		{
			name: "email",
			label: "Email",
			value: "",
			valid: false,
			pattern: emailValidator,
		},
		{
			name: "phone",
			label: "Phone",
			value: "",
			valid: false,
			pattern: phoneNumberFormatValidator,
		},
	];

	get validation() {
		return this.form.every(f => f.valid);
	}

	get data() {
		let res = {};

		this.form.forEach(field => {
			res[field.name] = field.value;
		});

		return res;
	}

	handle = (name, value) => {
		const field = this.form.find(f => f.name === name);

		if (field) {
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
