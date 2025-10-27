<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content area -->
    <main class="grow container mx-auto p-4">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* Optional additional layout styling can go here */
</style>
