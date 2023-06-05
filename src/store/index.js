import Order from './order'
import Products from './products'

export default class RootStore{
	constructor(){
		this.order = new Order();
		this.products = new Products();
	}
}