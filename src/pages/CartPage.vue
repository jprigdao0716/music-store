<template>
  <q-page padding>
    <!-- Display Cart Items -->
    <div class="cart-items-container">
      <q-card v-for="item in cartItems" :key="item.id" class="my-card">
        <q-img :src="item.image" class="cart-image" />
        <q-card-section>
          <div class="card-content">
            <div class="item-details">
              <h2>{{ item.name }}</h2>
              <p>Quantity: {{ item.quantity }}</p>
              <p>Price: ${{ item.price }}</p>
            </div>
            <div class="button-group">
              <q-btn @click="removeFromCart(item.id)" color="negative" label="Remove" class="remove-btn" />
              <q-btn @click="goToCheckout" color="primary" label="Checkout" class="checkout-btn" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Total Items Banner -->
    <q-banner class="q-mt-md total-banner">
      Total Items: {{ cartItemCount }} <br />
      Total Amount: ${{ totalAmount }}
    </q-banner>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartItemCount', 'totalAmount']),
  },
  methods: {
    ...mapActions('cart', ['removeFromCart']),
    goToCheckout() {
      this.$router.push('/checkoutorder');
    },
  },
};
</script>

<style scoped>
.cart-items-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.my-card {
  max-width: 800px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cart-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: row; /* Align items in a row */
  justify-content: space-between; /* Space out the content and button */
  align-items: center; /* Align items vertically */
  margin-left: 20px;
  width: 90%;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.remove-btn {
  border-radius: 40px;
  width: 200px;
}

.total-banner {
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

.checkout-btn {
  border-radius: 40px;
  margin-top: 20px;
  width: 200px;
  display: block;
  margin-left: auto; /* Align to the right */
}
</style>
