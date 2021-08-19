<template>
  <fieldset class="space-y-5">
    <div
      class="relative flex items-start"
      v-for="node in nodes"
      :key="node.address"
    >
      <div class="flex items-center h-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          class="
            focus:ring-indigo-500
            h-4
            w-4
            text-indigo-600
            border-gray-300
            rounded
          "
          v-model="node.selected"
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="comments" class="font-medium text-gray-700">
          {{ addressPrettier(node.address) }}
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { inject, computed, ref, watch, reactive } from "vue";
const nodesStore = inject("nodesStore");
const nodes = ref([]);
const emits = defineEmits(["nodes-updated"]);
nodesStore.state.nodes.forEach((node) => {
  nodes.value.push({
    ...node,
    selected: false,
  });
});

const addressPrettier = (address) => {
  const start = address.slice(0, 4);
  const end = address.slice(address.length - 4, address.length);
  return `${start}********${end}`;
};
watch(
  () => nodes,
  (nodes, prevState) => {
    emits("nodes-updated", nodes.value);
  },
  { deep: true }
);
</script>