<template>
  <button
    type="button"
    class="
      inline-flex
      items-center
      px-6
      py-3
      border border-transparent
      text-base
      font-medium
      rounded-full
      shadow-sm
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
    @click="$emit('clicked')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
});
const emit = defineEmits(["clicked"]);
</script>