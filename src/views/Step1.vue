<template>
  <h1>Import your file</h1>
  <p>
    This is the first step, please upload your sinovate's history file. If you
    don't know how to do this :
  </p>
  <ul>
    <li>Open your wallet</li>
    <li>Go to the history tab (5th tab from the top)</li>
    <li>Click on export and choose a location</li>
  </ul>
  <Disclamer class="my-4" />
  <div class="flex justify-center my-10">
    <FileUploader @file-uploaded="(e) => processFile(e)" />
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import Papa from "papaparse";
import findInfinitynodes from "../helpers/findInfinitynodes";
import router from "../router/index";
const result = ref();
const history = ref([]);
const nodesStore = inject("nodesStore");

const nodes = computed(() => {
  return nodesStore.state.nodes;
});

const processFile = (file) => {
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
        setTimeout(() => {
          router.push({ name: "Step2" });
        }, 1000);
      }
    },
  });
};
</script>