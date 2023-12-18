<template>
    <Navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
    <Footer/>
  </template>
  
  <script setup>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  </script>