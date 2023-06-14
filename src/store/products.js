import { makeAutoObservable } from 'mobx';
import { products } from '../shared/constants';

export default class Products{

	products = products;

	get total() {
		return this.products.reduce((acc, item) => acc + item.price * item.cnt, 0);
	};

	get inCart() {
		return this.products.reduce((acc, item) => acc + item.cnt, 0);
	};

	onChange = (id, cnt) => {
		const product = this.products.find(pr => pr.id === id)
		if (product) {
			product.cnt = cnt === 0 ? 0 : Math.max(1, Math.min(product.rest, cnt));
		}
	}

	onRemove = (id) => {
		this.products = this.products.filter(pr => pr.id !== id)
	}

	constructor(){
		makeAutoObservable(this);
	}
}
