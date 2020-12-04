export const addToCart = (product) => {
  return {
    type: '@cart/ADD',
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: '@cart/REMOVE',
    id,
  };
};

export const updateAmount = (id, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
};
