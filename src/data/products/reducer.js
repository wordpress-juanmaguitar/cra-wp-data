import TYPES from "./action-types";
import {logActions} from "./utils";

const { CREATE, UPDATE, DELETE, HYDRATE } = TYPES;

const reducer = (
  state = { products: [] },
  action
) => {

  logActions(state, action)

  const { products: incomingProducts, product, productId, type } = action 

  switch (type) {
    case CREATE:
      return {
        products: [...state.products, product]
      };

    case UPDATE:
      return {
        products: state.products
          .filter(existing => existing.id !== product.id)
          .concat([product])
      };

    case DELETE:
      return {
        products: state.products.filter(existing => existing.id !== productId)
      };

    case HYDRATE:
      return { products: incomingProducts };

    default:
      return state;
  }
};

export default reducer;
