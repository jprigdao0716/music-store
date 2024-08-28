<template>
  <q-page class="page-content">
    <q-banner>
      <div class="text-h3">
      Welcome, Dear Visitor!
    </div>

<div class="container">


        <div class="text-h6 animated-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptas autem consequatur dolorem quod amet, debitis praesentium expedita placeat ipsum, esse magni hic labore iste! Vel hic cupiditate dolorem.


      <div class="col-12">
        <div class="image-container">
          <img src="src/assets/02_PaulGilbert_0030_C1.jpg" alt="Image 1" class="animated-image">
          <img src="src/assets/Masters_of_Rock_2007_-_Children_of_Bodom_-_Alexi_Laiho_-_08.jpg" alt="Image 2" class="animated-image">
          <img src="src/assets/main-qimg-597ac0492a233473e8d477c93ba97f19.jfif" alt="Image 3" class="animated-image">
          <img src="src/assets/1900x1900-000000-80-0-0.jpg" alt="Image 4" class="animated-image">
          <img src="src/assets/Michael-Angelo-BATIO-1.jpg" alt="Image 1" class="animated-image">
          <!-- <img src="src/assets/Joe_Satriani_2005.jpg" alt="Image 2" class="animated-image">
          <img src="src/assets/steve.jpg" alt="Image 3" class="animated-image">
          <img src="src/assets/yngwie.jpg" alt="Image 4" class="animated-image">
          <img src="src/assets/reb-beach.jpg" alt="Image 1" class="animated-image">
          <img src="src/assets/richie.jpg" alt="Image 2" class="animated-image">
          <img src="src/assets/marty.jpg" alt="Image 3" class="animated-image">
          <img src="src/assets/James_Hetfield_2017.jpg" alt="Image 4" class="animated-image"> -->
          <!-- Add more images as needed -->
        </div>
      </div>
    </div>
  </div>


    </q-banner>
    <div class="button-container">
    <q-btn to="/products" color="primary" label="View Products" />
  </div>
  </q-page>
</template>

<!-- <script>
export default {};
</script> -->

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;
  height: 110vh; /* Makes the page full height */
  background: url('src/assets/lespaul.jpg') no-repeat center center fixed;
  background-size: cover; /* Ensures the image covers the whole page */
  text-align: center; /* Centers the text horizontally */
}

.button-container {
  margin-top: 30px; /* Adds space between the banner and button */

}

.button-container .q-btn{
  align-items: center;
  border-radius: 40px;
  padding: 10px;
  width: 180px;
  text-decoration: none;
}

.q-banner {
    min-height: 58px;
    padding: 8px 16px;
    background: none;
    color: aliceblue;
}


@keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .image-container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      margin-top: 3rem;
    }

    .animated-image {
      width: 150px; 
      height: 150px;
      animation: bounceIn 2s ease-in-out infinite alternate;
      object-fit: cover; 
    }

    .animated-text{
      max-width: 1000px;
      margin-top: 3rem;

    }

    @keyframes bounceIn {
      0% {
        transform: scale(0.8);
        opacity: 0.8;
      }
      100% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
</style>