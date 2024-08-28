<template>
  <q-page padding>
    <q-card class="my-card">
      <div v-if="addToCartMessage" class="add-to-cart-message" style="background-color: bisque; padding: 15px;">
            {{ addToCartMessage }}
          </div>
      <q-img :src="product.image" />
      <q-card-section>
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <p style="color: red">${{ product.price }}.00</p>
          <p>{{ product.description }}</p>
          <div class="quantity-section">
            <q-input
              v-model="quantity"
              type="number"
              min="1"
              outlined
              class="quantity-input"
            />
          </div>
          <div class="button-group">
            <q-btn
              @click="addToCart"
              color="primary"
              label="Add to Cart"
              class="add-to-cart-btn"
            />
            <q-btn
              @click="goToCheckout"
              color="secondary"
              label="Checkout"
              class="checkout-btn"
            />
          </div>
        </div>

        <!-- Tabs -->
        <q-tabs v-model="tab" class="product-tabs">
          <q-tab name="description" label="Description" />
          <q-tab name="reviews" label="Reviews" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="description">
            <h2>Description</h2>
            <p>{{ product.description }}</p>
          </q-tab-panel>
          <q-tab-panel name="reviews">
            <h2>Reviews</h2>
            <p>{{ product.reviews }}</p>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>

    <!-- Related Products Section -->
    <q-card class="related-products-card" style="background-color: transparent;">
      <q-card-section>
        <h3>Related Products</h3>
        <div class="related-products">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="related-product"
          >
            <q-img :src="relatedProduct.image" />
            <p>{{ relatedProduct.name }}</p>
            <q-btn
              @click="viewProduct(relatedProduct.id)"
              color="primary"
              label="View Details"
              class="related-btn"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      product: {
        id: 1,
        name: 'JACKSON FLYING V',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'src/assets/eg1.jpg',
        reviews: 'No reviews yet.',
      },
      relatedProducts: [
        { id: 2, name: 'ESP LTD ARROW', image: 'src/assets/eg2.jpg' },
        { id: 3, name: 'GIBSON FLYING V', image: 'src/assets/eg3.jpg' },
      ],
      quantity: 1,
      tab: 'description',
      addToCartMessage: '', // Message to display after adding to cart
    };
  },
  async created() {
    const productId = this.$route.params.id;
    // Fetch product details based on productId
    await this.fetchProductDetails(productId);
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    async fetchProductDetails(productId) {
      // Fetch product details from your API or store
      const products = [
        { id: 1, name: 'JACKSON FLYING V', price: 300.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/eg1.jpg', reviews: 'No reviews yet.' },
        { id: 2, name: 'JACKSON FLYING V WHITE', price: 300.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/eg2.jpg', reviews: 'Good product.' },
        { id: 3, name: 'JACKSON FLYING FLOYD ROSE', price: 280.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/eg3.jpg', reviews: 'Good product.' },
        { id: 4, name: 'ESP LTD ARROW', price: 330.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/LARROW200BLK.jpg', reviews: 'Good product.' },
        { id: 5, name: 'GIBSON FLYING V', price: 280.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/eg6.jpg', reviews: 'Good product.' },
        { id: 6, name: 'JACKSON EXPLORER', price: 340.00, description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.', image: 'src/assets/eg7.jpg', reviews: 'Good product.' },
        // Add more products as needed
      ];
      this.product = products.find(p => p.id === parseInt(productId));
    },
    addToCart() {
      if (this.product) {
        const productToAdd = { ...this.product, quantity: this.quantity };
        console.log('Adding to Cart:', productToAdd);
        this.$store.dispatch('cart/addToCart', productToAdd);
        this.addToCartMessage = 'Product has been added to cart'; // Set the message
      }
    },
    goToCheckout() {
      this.$router.push('/checkoutorder');
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style scoped>

.q-page {
    background-color: aliceblue;
    /* background: url(/src/assets/lespaul.jpg) no-repeat center center fixed; */
    background-size: cover;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.my-card {
  max-width: 600px;
  margin: auto;
}

.product-details {
  margin-bottom: 20px;
}

.quantity-section {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.quantity-input {
  max-width: 500px;
  margin-left: 0rem;
  padding: 0px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.product-tabs {
  margin-top: 20px;
}

.related-products-card {
  margin-top: 40px;
}

.related-products {
  display: flex;
  gap: 30px;
  justify-content: space-evenly;

}

.related-product {
  max-width: 150px;

}

.add-to-cart-btn,
.checkout-btn {
  width: 200px;
}

.related-btn {
  width: 230px;
  margin: auto;
}

.add-to-cart-message {
  color: green;
  margin-top: 10px;
}
</style>
