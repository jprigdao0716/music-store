<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <h2>Your Order</h2>
        <p>Total: ${{ totalAmount }}</p>
        <q-btn @click="initiatePayment" color="primary" label="PayPal Checkout" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      totalAmount: 100, // Set this dynamically based on cart contents
    };
  },
  methods: {
    async initiatePayment() {
      try {
        const response = await fetch('http://localhost/Quasar/ecommerce/create-payment.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: this.totalAmount,
            currency: 'USD', // Add currency if needed
            description: 'Order description', // Add description if needed
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        if (data.approval_url) {
          window.location.href = data.approval_url; // Redirect to PayPal
        } else {
          throw new Error('Error initiating payment: ' + (data.error || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error processing your payment. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
}

.q-btn {
  width: 200px;
}
</style>
