<template>
  <q-page padding>
    <div class="container">
        <!-- Main product content -->
      </div>
      

      <div class="related-products-section mt-5">
        <h2 class="related-products-title">Related Products</h2>
        <div class="row">
          <div
            v-for="product in products"
            :key="product.id"
            class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch"
          >
            <q-card class="w-100 d-flex flex-column card-custom">
              <q-img :src="product.image" class="card-img-top" />
              <q-card-section class="flex-grow-1 d-flex flex-column">
                <h2 class="h5 product-name" @click="goToDetail(product.id)">
                  {{ product.name }}
                </h2>
                <h4 class="h4 product-price">{{ product.price }}</h4>
                <div class="text-center mt-4">
                  <q-btn
                    @click="goToDetail(product.id)"
                    color="primary"
                    label="View Product"
                    class="view-product-btn"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'JACKSON FLYING V - BLACK', price: '$300.00', image: 'src/assets/eg1.jpg' },
        { id: 2, name: 'JACKSON FLYING V - WHITE', price: '$300.00', image: 'src/assets/eg2.jpg' },
        { id: 3, name: 'JACKSON FLYING FLOYD ROSE', price: '$300.00', image: 'src/assets/eg3.jpg' },
        { id: 4, name: 'ESP LTD ARROW', price: '$330.00', image: 'src/assets/LARROW200BLK.jpg' },
        { id: 5, name: 'GIBSON FLYING V', price: '$280.00', image: 'src/assets/eg6.jpg' },
        { id: 6, name: 'JACKSON EXPLORER', price: '$340.00', image: 'src/assets/eg7.jpg' },
      ],
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style>

.container {
  max-width: 1000px;
  width: 100%;
  padding-left: 18px;
  padding-right: 15px;
}

.card-img-top {
  height: 700px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}


.q-card {
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(252, 11, 11, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #f8f8f8;
  margin: 40px;
}

.product-name {
  margin: 0;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  color: #333;
}

.product-price {
  margin: 0;
  color: #d32f2f;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 20px;
}

.view-product-btn {
  font-size: 0.9rem;
  border-radius: 20px;
  background-color: #1976d2;
  color: #fff;
  margin-left: -1rem;
}
.related-products-section {
  margin-top: 50px;
  text-align: center;
}

.related-products-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .card-img-top {
    height: 200px;
  }

  .view-product-btn {
    padding: 6px 16px;
    font-size: 0.8rem;

  }
}
</style>
