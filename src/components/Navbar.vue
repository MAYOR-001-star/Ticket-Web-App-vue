<template>
  <nav class="bg-white shadow-md py-4">
    <div class="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
      <RouterLink
        to="/"
        class="text-2xl font-bold text-blue-600"
        @click="closeMenu"
      >
        TicketX
      </RouterLink>

      <!-- Hamburger -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 text-3xl"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✖</span>
      </button>

      <!-- Desktop -->
      <div class="hidden md:flex gap-5 items-center">
        <template v-if="session">
          <RouterLink to="/dashboard" class="text-gray-700 hover:text-blue-600">
            Dashboard
          </RouterLink>
          <RouterLink to="/tickets" class="text-gray-700 hover:text-blue-600">
            Tickets
          </RouterLink>
          <button
            @click="handleLogout"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <RouterLink to="/auth/login" class="text-gray-700 hover:text-blue-600">
            Login
          </RouterLink>
          <RouterLink to="/auth/signup" class="text-gray-700 hover:text-blue-600">
            Signup
          </RouterLink>
        </template>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isOpen" class="md:hidden px-4 space-y-3 mt-2 pb-3 bg-white shadow-lg">
      <template v-if="session">
        <RouterLink to="/dashboard" @click="closeMenu" class="block">
          Dashboard
        </RouterLink>
        <RouterLink to="/tickets"   @click="closeMenu" class="block">
          Tickets
        </RouterLink>
        <button
          @click="handleLogout"
          class="w-full bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </template>

      <template v-else>
        <RouterLink to="/auth/login" @click="closeMenu" class="block">
          Login
        </RouterLink>
        <RouterLink to="/auth/signup" @click="closeMenu" class="block">
          Signup
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isOpen = ref(false);
const session = ref(false);

function updateSession() {
  session.value = !!localStorage.getItem("ticketapp_session");
}

function handleLogout() {
  localStorage.removeItem("ticketapp_session");
  updateSession();
  isOpen.value = false;
  router.push("/");
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

onMounted(() => {
  updateSession();
  window.addEventListener("storage", updateSession);

  router.afterEach(() => {
    isOpen.value = false;
    updateSession();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", updateSession);
});
</script>
