import { makeAutoObservable } from 'mobx';

export default class Cart{

	constructor(){
		makeAutoObservable(this);
	}
}
