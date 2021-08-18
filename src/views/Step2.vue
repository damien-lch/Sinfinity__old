<template>
  <h1>Step 2</h1>
  <section>
    <h2>I have founded {{ nodes.length }} infinitynodes</h2>
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(node, index) in nodes" :key="node.address">
          <a href="#" class="block hover:bg-gray-50">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-indigo-600 truncate">
                  {{ `Infinity node #${index + 1}` }}
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                  <p
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    {{ node.address }}
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500">
                    {{ node.type }}
                  </p>
                  <p
                    class="
                      mt-2
                      flex
                      items-center
                      text-sm text-gray-500
                      sm:mt-0
                      sm:ml-6
                    "
                  >
                    {{ node.address }}
                  </p>
                </div>
                <div
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
                >
                  <p>
                    {{ node.history.length }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <Button @clicked="router.push('/step3')"> View nodes stats </Button>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
import { inject, computed } from "vue";
import router from "../router/index";
const nodesStore = inject("nodesStore");
const nodes = computed(() => {
  return nodesStore.state.nodes;
});
</script>