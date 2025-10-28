<template>
  <div class="max-w-[1440px] mx-auto px-4 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
    </div>

    <!-- Stats grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div class="bg-white shadow p-6 rounded-xl border-l-4 border-blue-500">
        <h3 class="text-gray-500 text-sm font-medium">Total Tickets</h3>
        <p class="text-2xl font-bold text-gray-800">{{ stats.total }}</p>
      </div>

      <div class="bg-white shadow p-6 rounded-xl border-l-4 border-green-500">
        <h3 class="text-gray-500 text-sm font-medium">Open Tickets</h3>
        <p class="text-2xl font-bold text-gray-800">{{ stats.open }}</p>
      </div>

      <div class="bg-white shadow p-6 rounded-xl border-l-4 border-amber-500">
        <h3 class="text-gray-500 text-sm font-medium">In Progress Tickets</h3>
        <p class="text-2xl font-bold text-gray-800">{{ stats.inProgress }}</p>
      </div>

      <div class="bg-white shadow p-6 rounded-xl border-l-4 border-gray-500">
        <h3 class="text-gray-500 text-sm font-medium">Closed Tickets</h3>
        <p class="text-2xl font-bold text-gray-800">{{ stats.closed }}</p>
      </div>
    </div>

    <!-- Button -->
    <div class="mt-10 text-center">
      <button
        @click="goToTickets"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
      >
        Manage Tickets
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// State
const stats = reactive({
  total: 0,
  open: 0,
  inProgress: 0,
  closed: 0,
})

// Lifecycle: when mounted
onMounted(() => {
  const session = localStorage.getItem('ticketapp_session')
  if (!session) {
    router.push('/auth/login')
    return
  }

  const tickets = JSON.parse(localStorage.getItem('tickets')) || []

  stats.total = tickets.length
  stats.open = tickets.filter(t => t.status === 'open').length
  stats.inProgress = tickets.filter(t => t.status === 'in_progress').length
  stats.closed = tickets.filter(t => t.status === 'closed').length
})


// Go to tickets page
function goToTickets() {
  router.push('/tickets')
}
</script>

<style scoped>
/* You can add scoped component styles here if needed */
</style>
