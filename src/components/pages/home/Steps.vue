<template>
  <div class="my-8">
    <h2>Steps</h2>
    <div class="grid grid-cols-3 gap-3">
      <div class="rounded-xl shadow-lg p-4" v-for="step in steps" :key="step">
        <h3 class="text-indigo-600 font-bold">{{ step.title }}</h3>
        <p class="text-gray-500">
          {{ step.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const steps = ref([
  {
    title: "Import",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
  {
    title: "Verify",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
  {
    title: "Analyse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
]);
</script>