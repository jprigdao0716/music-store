<template>
  <q-page class="order-confirmation-page">
    <q-container>
      <q-card>
        <q-card-section>
          <h4>Order Confirmation</h4>

          <q-separator />

          <h6>Shipping Details</h6>
          <div v-if="checkoutInfo.shippingDetails">
            <p>Name: {{ checkoutInfo.shippingDetails.name }}</p>
            <p>Email: {{ checkoutInfo.shippingDetails.email }}</p>
            <p>Address: {{ checkoutInfo.shippingDetails.address }}</p>
            <p>City: {{ checkoutInfo.shippingDetails.city }}</p>
            <p>State: {{ checkoutInfo.shippingDetails.state }}</p>
            <p>Zip Code: {{ checkoutInfo.shippingDetails.zip }}</p>
            <p>Country: {{ checkoutInfo.shippingDetails.country }}</p>
          </div>

          <q-separator />

          <h6>Order Summary</h6>
          <q-list>
            <q-item v-for="item in checkoutInfo.cartItems" :key="item.id">
              <q-item-section>
                {{ item.name }} - {{ item.quantity }} x ${{ item.price }}
              </q-item-section>
              <q-item-section>
                ${{ item.quantity * item.price }}
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator />

          <q-item-label>Total: ${{ checkoutInfo.amount }}</q-item-label>
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      checkoutInfo: JSON.parse(localStorage.getItem('checkoutInfo')) || {}
    };
  }
};
</script>

<style scoped>
.order-confirmation-page {
  max-width: 800px;
  margin: 0 auto;
}

.q-card {
  padding: 20px;
}

h4 {
  margin-bottom: 20px;
}

.q-separator {
  margin: 20px 0;
}

.q-item-label {
  font-weight: bold;
}
</style>
