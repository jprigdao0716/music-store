<template>
  <q-toolbar>
    <q-toolbar-title>
      <img
        src="src/assets/Lightbearer Logo 3.png"
        alt="My E-Commerce Site Logo"
        class="logo-img"
      />
      LIGHTBEARER STORE
    </q-toolbar-title>

    <q-input
      rounded
      dense
      debounce="300"
      placeholder="Search"
      v-model="searchQuery"
      class="search-box"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-btn flat to="/" label="Home" />
    <q-btn flat to="/products" label="Products" />
    <q-btn flat to="" label="Blog" />
    <q-btn flat to="" label="Contact" />

    <q-btn flat to="/cart">
      Cart
      <q-icon name="shopping_cart" class="cart-icon" />
    </q-btn>
  </q-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(['cartItemCount']),
  },
};
</script>

<style>
.logo-img {
  height: 100px;
  width: 150px;
  margin-right: 20px;
}

.search-box {

  max-width: 1000px;
  margin-left: 0rem;
  background-color: aliceblue;
  border-radius: 40px;
}

.q-btn {
  text-decoration: none !important;
  margin-left: 8rem;
}

.cart-icon {
  margin-left: 5rem;
  margin-top: -2rem;
}

</style>
