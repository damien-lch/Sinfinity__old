<template>
  <h1>Step 2</h1>
  <section>
    <h2>I have founded {{ nodes.length }} infinitynodes</h2>
    <div class="flex">
      <div class="w-5/6">
        <RewardsByNode />
      </div>
      <div>
        <NodesSelector />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
import { inject, computed, ref } from "vue";
import router from "../router/index";
const nodesStore = inject("nodesStore");
const nodes = computed(() => {
  return nodesStore.state.nodes;
});
const selectedNodes = ref([]);
</script>