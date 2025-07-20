<script setup>
  import Nav from './components/Nav.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Nav />
  <main>
    <div class="bg-gray-200 h-screen -mt-2">
      <RouterView />
    </div> 
  </main>
  <Footer/>
</template>


