<template>
  <q-toolbar class="q-navbar">
    <!-- Navbar Brand -->
    <q-toolbar-title class="navbar-brand">
      <img
        src="src/assets/Lightbearer Logo 3.png"
        alt="My E-Commerce Site Logo"
        class="logo-img"
      />
      LIGHTBEARER STORE
    </q-toolbar-title>

    <q-btn
      flat
      dense
      round
      icon="menu"
      @click="drawer = !drawer"
      class="d-lg-none navbar-toggler"
      aria-label="Toggle navigation"
    />

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

    <div class="spacer d-none d-lg-block" />

    <!-- Navbar Collapse for Desktop -->
    <div class="d-none d-lg-flex align-items-center collapse">
      <q-btn flat to="/" label="Home" class="nav-item" />
      <q-btn flat to="/products" label="Products" class="nav-item" />
      <q-btn flat to="" label="Blog" class="nav-item" />
      <q-btn flat to="" label="Contact" class="nav-item" />
      <q-btn flat to="/cart" class="cart-btn">
        Cart
        <q-icon name="shopping_cart" class="cart-icon ml-2" />
      </q-btn>
    </div>

    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      behavior="mobile"
      class="q-pa-md d-lg-none"
    >
      <q-list>
        <q-item clickable to="/">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable to="/products">
          <q-item-section>Products</q-item-section>
        </q-item>
        <q-item clickable to="">
          <q-item-section>Blog</q-item-section>
        </q-item>
        <q-item clickable to="">
          <q-item-section>Contact</q-item-section>
        </q-item>
        <q-item clickable to="/cart">
          <q-item-section>Cart</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      drawer: false,
    };
  },
};
</script>

<style>
.q-navbar {
  background-color: transparent;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 50px;
  width: auto;
  margin-right: 15px;
}

.spacer {
  flex: 1;
}

.q-btn {
  margin: 10px;
}

.search-box {
  max-width: 200px;
  width: 80%;
  background-color: aliceblue;
  border-radius: 40px;
  text-align: center;
}

.cart-btn {
  margin-left: 20px;
}

.cart-icon {
  margin-left: 8px;
}

.navbar-toggler {
    display: none;
  }

@media (max-width: 992px) {
  .search-box {
    max-width: 100%;
    margin-bottom: 10px;
  }

  .navbar-toggler {
    display: block;
  }

  .spacer.d-none.d-lg-block {
    display: none;
  }
  
  .collapse{
    display: none;
  }

  .d-lg-none{
    background-color: black;
  }

  
}

@media (max-width: 600px) {
    .navbar-brand{
   
     display: none;

  }

  .navbar-toggler{
    margin-left: 0rem;
  }

}
</style>
