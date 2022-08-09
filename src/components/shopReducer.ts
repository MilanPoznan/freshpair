
type SingleProduct = {
  name: string
}
export interface InitialState {
  total: number
  products: any[]
  // addToCart: (product: any) => void,
  // removeFromCart: (product: any) => void
}

export const initialState = {
  total: 0,
  products: []
};

const shopReducer = (state: InitialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
