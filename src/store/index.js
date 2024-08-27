// store/index.js
import { createStore } from 'vuex';
import cart from './cart'; // Adjust the path if needed

const store = createStore({
  modules: {
    cart, // Register the cart module
    // other modules if any...
  }
});

export default store;
