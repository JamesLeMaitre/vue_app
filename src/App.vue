<script setup lang="ts">
import Aside from './components/asside/Aside.vue'
import Navbar from './components/asside/Navbar.vue'
import Article from './components/asside/Article.vue'</script>

<template>
  <Aside/>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <Navbar/>
    <Article/>
  </main>

</template>
