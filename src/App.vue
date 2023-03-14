<script setup lang="ts">
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'

import Article from './components/asside/Article.vue'
import Aside from './components/asside/Aside.vue'
import Navbar from './components/asside/Navbar.vue'
</script>

<template>
  <Aside/>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- <Navbar />
    <Article /> -->
  </main>
</template>
