<template>
  <div class="max-w-[1440px] mx-auto px-4 py-10">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Tickets</h1>
      <button
        @click="router.push('/dashboard')"
        class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition"
      >
        Back to Dashboard
      </button>
    </div>

    <!-- Ticket Form -->
    <TicketsForm
      :key="editingTicket ? editingTicket.id : 'new'"
      :initialData="editingTicket"
      @add="handleAdd"
      @update="handleUpdate"
    />

    <!-- Ticket List -->
    <TicketsList
      :tickets="tickets"
      @edit="setEditingTicket"
      @delete="handleDeleteClick"
    />

    <!-- Confirm Modal -->
    <ConfirmModal
      :isOpen="showConfirm"
      title="Delete Ticket"
      message="Are you sure you want to delete this ticket? This action cannot be undone."
      @confirm="confirmDelete"
      @cancel="() => (showConfirm = false)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import TicketsForm from "@/components/TicketsForm.vue";
import TicketsList from "@/components/TicketsList.vue";
import ConfirmModal from "@/components/ConfirmModal.vue";

const router = useRouter();
const tickets = ref([]);
const editingTicket = ref(null);
const showConfirm = ref(false);
const ticketToDelete = ref(null);

onMounted(() => {
  const session = localStorage.getItem("ticketapp_session");
  if (!session) {
    router.push("/auth/login");
    return;
  }
  const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.value = storedTickets;
});

const saveTickets = (updated) => {
  tickets.value = updated;
  localStorage.setItem("tickets", JSON.stringify(updated));
};

const handleAdd = (ticketData) => {
  const newTicket = {
    id: Date.now(),
    ...ticketData,
    createdAt: new Date(),
  };
  saveTickets([...tickets.value, newTicket]);
};

const handleUpdate = (updatedData) => {
  const updated = tickets.value.map((t) =>
    t.id === editingTicket.value.id ? { ...t, ...updatedData } : t
  );
  saveTickets(updated);
  editingTicket.value = null;
};

const handleDeleteClick = (id) => {
  ticketToDelete.value = id;
  showConfirm.value = true;
};

const confirmDelete = () => {
  const updated = tickets.value.filter((t) => t.id !== ticketToDelete.value);
  saveTickets(updated);
  showConfirm.value = false;
  ticketToDelete.value = null;
};

const setEditingTicket = (ticket) => {
  editingTicket.value = ticket;
};
</script>

<style scoped>
/* Optional: extra layout or animation styles can go here */
</style>
