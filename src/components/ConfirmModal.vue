<template>
  <!-- Modal only renders when isOpen is true -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-xl shadow-lg w-[90%] max-w-sm p-6 text-center">
      <h2 class="text-lg font-semibold mb-2">
        {{ title || "Confirm Action" }}
      </h2>
      <p class="text-gray-600 mb-6">
        {{ message || "Are you sure?" }}
      </p>

      <div class="flex justify-center gap-3">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          @click="$emit('confirm')"
          class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "Confirm Action",
  },
  message: {
    type: String,
    default: "Are you sure?",
  },
});

// Events
defineEmits(["confirm", "cancel"]);
</script>

<style scoped>
/* Optional: custom transitions or overlay effects */
</style>
