<template>
  <div class="max-w-md mx-auto my-16 bg-white shadow-md p-8 rounded-xl">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Sign Up</h1>

    <form @submit.prevent="onSubmit" class="space-y-5">
      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          v-model="name"
          type="text"
          @input="validateField('name')"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2"
          :class="errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'"
        />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input
          v-model="email"
          type="email"
          @input="validateField('email')"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2"
          :class="errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'"
        />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
      </div>

      <!-- Password -->
      <div>
        <label class="block mb-1 font-medium">Password</label>
        <input
          v-model="password"
          type="password"
          @input="validateField('password')"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2"
          :class="errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'"
        />
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
      >
        Create Account
      </button>

      <p class="text-center text-sm mt-3">
        Already have an account?
        <RouterLink to="/auth/login" class="text-blue-600 hover:underline">
          Log in
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { ref, reactive } from "vue";
import { signupSchema } from "@/lib/validation";

const router = useRouter();
const toast = useToast();

// Reactive form state
const name = ref("");
const email = ref("");
const password = ref("");

// Error tracking
const errors = reactive({
  name: "",
  email: "",
  password: "",
});

// Validate individual field using zod schema
function validateField(field) {
  const data = { name: name.value, email: email.value, password: password.value };
  const result = signupSchema.safeParse(data);

  if (!result.success) {
    // find this field's error
    const issue = result.error.issues.find((i) => i.path[0] === field);
    errors[field] = issue ? issue.message : "";
  } else {
    errors[field] = "";
  }
}

// Handle full submit
function onSubmit() {
  const data = { name: name.value, email: email.value, password: password.value };
  const result = signupSchema.safeParse(data);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors[issue.path[0]] = issue.message;
    });
    toast.error("Please fix the errors before submitting");
    return;
  }

  // Local storage logic
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find((u) => u.email === email.value);

  if (userExists) {
    toast.error("Email already exists");
    return;
  }

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully!");
  setTimeout(() => router.push("/auth/login"), 2000);
}
</script>
