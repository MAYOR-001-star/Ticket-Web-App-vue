<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pb-10"
  >
    <!-- Decorative Circles -->
    <div
      class="hidden md:block absolute top-10 left-5 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full blur-2xl opacity-70 floating"
    ></div>

    <div
      class="hidden md:block absolute bottom-32 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-300 rounded-full blur-2xl opacity-50 floating"
    ></div>

    <!-- Hero Content -->
    <div class="max-w-[700px] z-10 py-12 sm:py-16 px-2">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight max-w-[500px] mx-auto">
        Manage Your Tickets Seamlessly
      </h1>

      <p class="text-base sm:text-lg text-gray-600 mb-8 px-2 max-w-[450px] mx-auto">
        A powerful and intuitive platform to create, track, and manage your
        support tickets efficiently.
      </p>

      <div class="flex gap-4 justify-center items-center w-full sm:w-auto">
        <router-link
          to="/auth/login"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition text-center w-full sm:w-auto"
        >
          Login
        </router-link>

        <router-link
          to="/auth/signup"
          class="border border-blue-600 text-blue-600 hover:bg-blue-100 hover:border-transparent px-6 py-3 rounded-md transition text-center w-full sm:w-auto"
        >
          Get Started
        </router-link>
      </div>
    </div>

    <!-- Hero Wave -->
    <img
      src="/wave.svg"
      alt="wave background"
      class="hidden md:block w-full mt-4 sm:mt-0"
    />
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}
</style>
