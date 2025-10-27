<template>
  <div class="bg-white shadow-md p-6 rounded-xl mb-10">
    <h2 class="text-2xl font-semibold mb-4">
      {{ isEditing ? "Edit Ticket" : "Create New Ticket" }}
    </h2>

    <form @submit.prevent="onSubmit" class="space-y-5">
      <!-- Title -->
      <div>
        <label class="block mb-1 font-medium">Title</label>
        <Field
          name="title"
          type="text"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage name="title" class="text-red-500 text-sm mt-1" />
      </div>

      <!-- Description -->
      <div>
        <label class="block mb-1 font-medium">Description</label>
        <Field
          as="textarea"
          name="description"
          rows="3"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage name="description" class="text-red-500 text-sm mt-1" />
      </div>

      <!-- Priority and Status -->
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 font-medium">Priority</label>
          <Field
            as="select"
            name="priority"
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Field>
        </div>

        <div>
          <label class="block mb-1 font-medium">Status</label>
          <Field
            as="select"
            name="status"
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </Field>
        </div>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
      >
        {{ isEditing ? "Update Ticket" : "Add Ticket" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { z } from "zod";
import { toFormValidator } from "@vee-validate/zod";
import { ticketSchema } from "../lib/validation"; // ✅ same Zod schema you already have

// Props
const props = defineProps({
  initialData: Object,
  onAdd: Function,
  onUpdate: Function,
});

// Setup form validation
const { handleSubmit, resetForm } = useForm({
  validationSchema: toFormValidator(ticketSchema),
  initialValues: props.initialData || {
    title: "",
    description: "",
    priority: "low",
    status: "open",
  },
});

// Check edit mode
const isEditing = computed(() => !!props.initialData);

// Submit handler
const onSubmit = handleSubmit((values) => {
  if (props.initialData) {
    props.onUpdate(values);
  } else {
    props.onAdd(values);
  }
  resetForm();
});
</script>
