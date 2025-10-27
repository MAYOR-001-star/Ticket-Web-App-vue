<template>
  <!-- ✅ No tickets -->
  <p
    v-if="!tickets.length"
    class="text-gray-600 text-center mt-8"
  >
    No tickets found. Create your first one above!
  </p>

  <!-- ✅ Tickets Grid -->
  <div
    v-else
    class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <div
      v-for="ticket in tickets"
      :key="ticket.id"
      class="bg-white shadow-md p-5 rounded-xl border-l-4 border-blue-500"
    >
      <h3 class="text-xl font-semibold">{{ ticket.title }}</h3>
      <p class="text-gray-600 mt-2 line-clamp-3">
        {{ ticket.description }}
      </p>

      <div class="mt-4 text-sm text-gray-500">
        <p><strong>Priority:</strong> {{ ticket.priority }}</p>
        <p>
          <strong>Status:</strong>
          {{ formatStatus(ticket.status) }}
        </p>
      </div>

      <div class="flex gap-3 mt-5">
        <button
          @click="onEdit(ticket)"
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Edit
        </button>
        <button
          @click="onDelete(ticket.id)"
          class="text-red-600 hover:text-red-800 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  tickets: {
    type: Array,
    required: true,
  },
  onEdit: {
    type: Function,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
});

// Helper function to format status text
const formatStatus = (status) => {
  return status.replace("_", " ").toUpperCase();
};
</script>
