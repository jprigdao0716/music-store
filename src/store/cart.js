const state = {
  products: [
    // Your products list
  ],
  cart: [], // Manage cart items
};

const getters = {
  cartItems: state => state.cart,
  cartItemCount: state => state.cart.length,
  totalAmount: state => {
    return state.cart.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
};

const mutations = {
  ADD_TO_CART(state, product) {
    const existingProduct = state.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + (product.quantity || 1);
    } else {
      state.cart.push({ ...product, quantity: product.quantity || 1 });
    }
  },
  REMOVE_FROM_CART(state, id) {
    state.cart = state.cart.filter(item => item.id !== id);
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, id) {
    commit('REMOVE_FROM_CART', id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
