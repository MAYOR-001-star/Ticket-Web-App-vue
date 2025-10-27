<template>
  <section
    class="relative overflow-hidden bg-linear-to-b from-blue-50 to-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
  >
    <!-- Decorative Circles -->
    <div
      class="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-70"
    ></div>
    <div
      class="absolute bottom-44 right-20 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-50"
    ></div>

    <!-- Hero Content -->
    <div class="max-w-[800px] z-10 py-16">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        Manage Your Tickets Seamlessly
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        A powerful and intuitive platform to create, track, and manage your
        support tickets efficiently.
      </p>
      <div class="flex gap-4 justify-center">
        <router-link
          to="/auth/login"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        >
          Login
        </router-link>
        <router-link
          to="/auth/signup"
          class="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-md transition"
        >
          Get Started
        </router-link>
      </div>
    </div>

    <!-- Hero Wave (optional) -->
    
    <img
      src="/wave.svg"
      alt="wave background"
      class="mt-0"
    />
   
  </section>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
/* Optional custom styles can go here */
</style>
