<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h2>Payment Successful</h2>
        <p>Your payment was successful. Thank you for your purchase!</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  async created() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get('paymentId');
    const payerId = urlParams.get('PayerID');

    if (paymentId && payerId) {
      try {
        await fetch('http://localhost:5000/api/paypal/execute-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            paymentId,
            payerId
          })
        });

        // Handle successful payment (e.g., show success message, update order status)
      } catch (error) {
        console.error('Error executing payment:', error);
      }
    }
  }
};
</script>
