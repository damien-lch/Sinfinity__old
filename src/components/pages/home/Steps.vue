<template>
  <div class="grid grid-cols-3 gap-3 my-8">
    <div
      class="rounded-xl shadow-lg p-4"
      v-for="(step, index) in steps"
      :key="step"
    >
      <h3 class="text-indigo-600 font-bold">Step {{ index }}</h3>
      <p class="text-gray-500">
        {{ step.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const steps = ref([
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.Nulla a erat tellus.",
  },
]);
</script>