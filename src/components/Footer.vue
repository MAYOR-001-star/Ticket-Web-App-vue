<template>
  <footer class="bg-white shadow-inner py-5">
    <div class="max-w-[1440px] mx-auto text-center text-gray-500 text-sm">
      © {{ currentYear }} TicketX. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

// Dynamically get the current year
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Optional: custom footer styling */
</style>
