import { makeAutoObservable } from 'mobx';
import { fields } from '../shared/constants';

export default class Order {

	form = fields;

	handle = (name, value) => {
		const field = this.form.find(f => f.name === name);

		if (field) {
			field.value = value;
			field.valid = field.validator(field.value);
		}
	}

	get validation() {
		return this.form.every(f => f.valid);
	};

	get data() {
		let res = {};

		this.form.forEach(field => {
			res[field.name] = field.value;
		});

		return res;
	};

	constructor() {
		makeAutoObservable(this);
	};
}
