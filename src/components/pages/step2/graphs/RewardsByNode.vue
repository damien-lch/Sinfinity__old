<template>
  <h2>Rewards by node</h2>
  <BarChart :labels="labels" :datasets="datasets" />
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  nodes: Array,
});
const labels = computed(() => {
  return props.nodes ? props.nodes.map((node) => node.address) : [];
});
const datasets = computed(() => {
  return props.nodes
    ? [
        {
          data: props.nodes.map((node) => node.total_rewards),
          backgroundColor: props.nodes.map((node) => node.color),
        },
      ]
    : [];
});
</script>