import { makeAutoObservable } from 'mobx';
import { products } from '../shared/constants';

export default class Cart{

	products = products;

	onChange = (id, cnt) => {
		const product = this.products.find(pr => pr.id === id);
		if (product) {
			product.cnt = Math.max(1, Math.min(product.rest, cnt));
		}
	};

	onRemove = (id) => {
		this.products = this.products.filter((pr) => pr.id !== id);
	};


	get total() {
		return this.products.reduce((acc, item) => acc + item.price * item.cnt, 0);
	};

	constructor(){
		makeAutoObservable(this);
	};
}
