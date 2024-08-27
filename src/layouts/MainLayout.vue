<template>
  <q-layout view="lHh lpR lff">
    <q-header elevated>
      <Navbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center">
      <q-toolbar>
        <q-toolbar-title class="footer-title">© 2024 LIGHTBEARER MUSIC STORE</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import Navbar from 'components/AppNavbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>


<style scoped>

.q-header{
  padding-left: 30px;
  background-color: transparent
}

.q-footer{
  background-color: rgb(65, 64, 64);
  opacity: 60%;
}

.footer-title{
  font-size: 14px;
}


</style>