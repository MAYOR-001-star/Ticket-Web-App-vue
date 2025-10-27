<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
    <img
      src="/notFound.svg"
      alt="Page not found"
      class="w-60 max-w-md mb-6"
    />
    <h1 class="text-4xl font-bold text-gray-800 mb-2">
      404 - Page Not Found
    </h1>
    <p class="text-gray-600 mb-6 max-w-md">
      Oops! The page you’re looking for doesn’t exist or has been moved.
    </p>
    <button
      @click="goHome"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      Go Home
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
