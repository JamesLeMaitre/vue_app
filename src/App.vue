<script setup lang="ts">
import Article from './app/layouts/Article.vue'
import Aside from './app/layouts/Aside.vue'
import Navbar from './app/layouts/Navbar.vue'
</script>

<template>
  <Aside/>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <Navbar/>
    <Article/>
  </main>

</template>
