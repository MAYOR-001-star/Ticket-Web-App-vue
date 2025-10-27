<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>

      <!-- Email Field -->
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          v-model="email"
          @input="validateEmail"
          placeholder="Enter your email"
          class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
          :class="emailError ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'"
        />
        <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
      </div>

      <!-- Password Field -->
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          v-model="password"
          @input="validatePassword"
          placeholder="Enter your password"
          class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
          :class="passwordError ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'"
        />
        <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
      </div>

      <!-- Submit Button -->
      <button
        @click="handleLogin"
        class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Sign In
      </button>

      <p class="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?
        <router-link to="/auth/signup" class="text-blue-500 hover:underline">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const email = ref("");
const password = ref("");

const emailError = ref("");
const passwordError = ref("");

// === VALIDATION FUNCTIONS ===
function validateEmail() {
  if (!email.value) {
    emailError.value = "Email is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    emailError.value = "Invalid email address";
  } else {
    emailError.value = "";
  }
}

function validatePassword() {
  if (!password.value) {
    passwordError.value = "Password is required";
  } else if (password.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters";
  } else {
    passwordError.value = "";
  }
}

// === SUBMIT FUNCTION ===
function handleLogin() {
  validateEmail();
  validatePassword();

  if (!emailError.value && !passwordError.value) {
    toast.success("Login successful!");
  } else {
    toast.error("Please fix the errors before submitting");
  }
}
</script>
