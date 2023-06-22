
const initialState = {
            Id:{Id:0},
            products:[],
            quantity:0,
            total:0,
}
const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'AddProduct':
            return {quantity:state.quantity + 1,Id:{Id:state.Id.Id+1},products:[...state.products,Object.assign({},payload,state.Id)],total:state.total += payload.price*payload.quantity};
        case 'RemoveProduct':
            return {...state,products:state.products.filter((e)=>e.Id !== payload.Id),quantity:state.quantity > 0 && state.quantity - 1,total:state.total - payload.price};      
            default:
            return state
    }
}

export default CartReducer;

