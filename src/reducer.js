export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // eslint-disable-next-line no-case-declarations
      let newBasket = [...state.basket];

      // eslint-disable-next-line no-case-declarations
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
export default reducer;
