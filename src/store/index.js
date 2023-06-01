import Order from './order'
import Cart from './cart'

export default class RootStore{
	constructor(){
		this.order = new Order();
		this.cart = new Cart();
	}
}