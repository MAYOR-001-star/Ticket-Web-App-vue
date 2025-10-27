<template>
  <nav class="bg-white shadow-md py-4">
    <div class="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-blue-600">
        TicketApp
      </RouterLink>

      <div class="flex gap-5">
        <template v-if="session">
          <RouterLink to="/dashboard" class="text-gray-700 hover:text-blue-600">
            Dashboard
          </RouterLink>
          <RouterLink to="/tickets" class="text-gray-700 hover:text-blue-600">
            Tickets
          </RouterLink>
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
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const session = ref(false);

onMounted(() => {
  session.value = !!localStorage.getItem("ticketapp_session");
});
</script>
