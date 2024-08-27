<template>
  <q-page padding>
    <div class="container">
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-md-4 mb-4 d-flex align-items-stretch"
        >
          <q-card class="w-100 d-flex flex-column" style="opacity: 86%;">
            <q-img :src="product.image" class="card-img-top" />
            <q-card-section class="flex-grow-1 d-flex flex-column">
              <h2 class="h5" @click="goToDetail(product.id)">
  {{ product.name }}
</h2>

              <h4 class="h4">{{ product.price }}</h4>
              <!-- <p class="flex-grow-1">{{ product.description }}</p> -->
              <q-btn
                @click="goToDetail(product.id)"
                color="primary"
                label="View Product"
                class=""
              />
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
        {
          id: 1,
          name: 'JACKSON FLYING V - BLACK',
          description: 'Description for product 1',
          price: '$300.00',
          image: 'src/assets/eg1.jpg',
        },
        {
          id: 2,
          name: 'JACKSON FLYING V - WHITE',
          description: 'Description for product 2',
          price: '$300.00',
          image: 'src/assets/eg2.jpg',
        },
        {
          id: 3,
          name: 'JACKSON FLYING FLOYD ROSE',
          description: 'Description for product 2',
          price: '$300.00',
          image: 'src/assets/eg3.jpg',
        },
        {
          id: 4,
          name: 'ESP LTD ARROW',
          description: 'Description for product 2',
          price: '$330.00',
          image: 'src/assets/LARROW200BLK.jpg',
        },
        {
          id: 5,
          name: 'GIBSON FLYING V',
          description: 'Description for product 2',
          price: '$280.00',
          image: 'src/assets/eg6.jpg',
        },
        {
          id: 6,
          name: 'JACKSON EXPLORER',
          description: 'Description for product 2',
          price: '$340.00',
          image: 'src/assets/eg7.jpg',
        },
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
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;
  height: 110vh; 
  background: url('src/assets/lespaul.jpg') no-repeat center center fixed;
  background-size: cover; 
  text-align: center; 
}

.card-img-top {
  height: 450px;
  object-fit: cover;
  transition: transform 0.5s ease; 
}

.card-img-top:hover {
  transform: scale(1.1); 
}

.h4{
  margin-left: 6rem;
  color: red;
}

.h5{
  cursor: pointer;
}

.q-btn {
  border-radius: 40px;
  margin-left: 4rem;
  padding: 10px;
  width: 180px;
  text-decoration: none;
}

.q-card {
  box-shadow: 0 4px 8px rgba(248, 1, 1, 0.8);
}
</style>
