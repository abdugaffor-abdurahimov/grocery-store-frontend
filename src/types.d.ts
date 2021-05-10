interface IUser {
	_id: string;
	firstname: string;
	lastname: string;
	email: string;
	cart: ICart[];
}

interface ICart {
	amount: number;
	product: IProduct;
}

interface IUserState {
	loading: boolean;
	error: null | string;
	userInfos: IUser;
	cart: ICart[];
}

interface IProduct {
	_id: string;
	name: string;
	description: string;
	images: [string];
	price: number;
}

interface IProductsState {
	data: IProduct[];
	loading: boolean;
	error: string;
	currentProduct: IProduct;
}

interface Iaction {
	type: any;
	payload: any;
}

interface IState {
	user: IUserState;
	products: IProductsState;
}

interface IProductChangeInput {
	value: number | undefined;
	productId: string;
	userId: string;
	style?: any;
}

interface IError {
	message: string | null;
}

interface IDataCaracelData {
	image: string;
	legend: string;
}
