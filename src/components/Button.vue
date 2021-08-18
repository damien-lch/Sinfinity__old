<template>
  <button
    :class="isLoading ? 'isLoading' : ''"
    type="button"
    @click="$emit('clicked')"
  >
    <div
      class="whitespace-nowrap flex items-center"
      :class="isLoading ? 'opacity-0' : ''"
    >
      <slot></slot>
    </div>
    <div class="loading absolute" :class="isLoading ? '' : 'opacity-0'">
      loading
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  isLoading: Boolean,
});
const emit = defineEmits(["clicked"]);
</script>

<style lang="scss" scoped>
button {
  @apply items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 relative;
  &.isLoading {
    @apply cursor-not-allowed;
  }
  &:not(.isLoading) {
    @apply hover:bg-indigo-700
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
  }
}
.loading {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>