<template>
  <q-page class="checkout-page">
    <q-container>
      <q-card>
        <q-card-section>
          <h4>Checkout</h4>
          <q-form @submit.prevent="handleCheckout">
            <!-- Shipping Details -->
            <q-input v-model="shippingDetails.name" label="Name" required />
            <q-input v-model="shippingDetails.email" label="Email" type="email" required />
            <q-input v-model="shippingDetails.address" label="Address" required />
            <q-input v-model="shippingDetails.city" label="City" required />
            <q-input v-model="shippingDetails.state" label="State" required />
            <q-input v-model="shippingDetails.zip" label="Zip Code" required />
            <q-input v-model="shippingDetails.country" label="Country" required />

            <q-separator />

            <h6>Order Summary</h6>
            <q-list>
              <q-item v-for="item in cartItems" :key="item.id">
                <q-item-section>
                  {{ item.name }} - {{ item.quantity }} x ${{ item.price }}
                </q-item-section>
                <q-item-section>
                  ${{ item.quantity * item.price }}
                </q-item-section>
              </q-item>
            </q-list>

            <q-separator />

            <q-item-label>Total: ${{ totalAmount }}</q-item-label>
            <q-btn type="submit" color="primary" label="Place Order" />
          </q-form>

          <!-- PayPal Checkout button -->
          <div id="paypal-button-container" class="paypal-button-container"></div>
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      shippingDetails: {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      }
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'totalAmount']),
  },
  methods: {
    async handleCheckout() {
      if (!this.isValidShippingDetails()) {
        alert('Please fill out all required fields.');
        return;
      }

      // Store checkout information in local storage
      localStorage.setItem('checkoutInfo', JSON.stringify({
        amount: this.totalAmount,
        shippingDetails: this.shippingDetails,
        cartItems: this.cartItems
      }));

      // Redirect to order confirmation page
      this.$router.push('/order-confirmation');
    },
    isValidShippingDetails() {
      return Object.values(this.shippingDetails).every(value => value.trim() !== '');
    }
  },
  mounted() {
    // Load PayPal JavaScript SDK
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AWzA6dyaY2Iji7bVblUkl4ijRj_hIiivn57Rhseab0sxxe1Bsx3k-GPKxdKWPpiSLaCujsvnmVTby9Ae'; 
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.totalAmount.toFixed(2)
                }
              }]
            });
          },
          onApprove: async (data, actions) => {
            try {
              await actions.order.capture();
              alert('Payment successful!');
            } catch (error) {
              console.error('Error capturing payment:', error);
              alert('Payment capture failed. Please try again.');
            }
          },
          onError: (err) => {
            console.error('PayPal Checkout error:', err);
            alert('Payment failed. Please try again.');
          }
        }).render('#paypal-button-container');
      }
    };
    document.body.appendChild(script);
  }
};
</script>

<style scoped>
.checkout-page {
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

.paypal-button-container {
  margin-top: 30px;
  display: flex;
  justify-content: center; /* Center the PayPal button */
}

/* Ensure no text-decoration on q-btn */
.q-btn {
  text-decoration: none !important; /* Use !important to override other styles */
  width: 200px;
}
</style>
