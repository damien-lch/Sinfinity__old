<template>
  <div>
    <h1>Import your file</h1>
    <div>
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
        @click="openUploader()"
      >
        Choose history file !
      </button>
      <input
        class="hidden"
        type="file"
        ref="fileUploader"
        @change="(e) => processFile(e)"
      />
    </div>
    <div>
      {{ nodes }}
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import Papa from "papaparse";
import findInfinitynodes from "../helpers/findInfinitynodes";
import router from "../router/index";
const fileUploader = ref(null);
const result = ref();
const history = ref([]);
const nodesStore = inject("nodesStore");

const nodes = computed(() => {
  return nodesStore.state.nodes;
});
const openUploader = () => {
  fileUploader.value.click();
};
const processFile = (e) => {
  const file = e.target.files[0];
  Papa.parse(file, {
    complete: (resp) => {
      if (resp.data) {
        resp.data.slice(1, resp.data.length).forEach((line) => {
          "Confirmed", "Date", "Type", "Label", "Address", "Amount (SIN)", "ID";
          const historyLine = {
            confirmed: line[0],
            date: line[1],
            type: line[2],
            label: line[3],
            address: line[4],
            amount: parseFloat(line[5]),
            id: line[6],
          };
          history.value.push(historyLine);
        });
        nodesStore.addNodes(findInfinitynodes(history.value));
        router.push("/step2");
      }
    },
  });
};
</script>