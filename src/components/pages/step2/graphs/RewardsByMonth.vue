<template>
  <h2>Rewards by month</h2>
  <BarChart :labels="labels" :datasets="datasets" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { sortByAZ } from "../../../../helpers/sort.js";
const props = defineProps({
  nodes: Array,
});
const nodes = computed(() => {
  return props.nodes;
});
const histories = computed(() => {
  const stories = [];
  nodes.value.forEach((node) => {
    node.history.forEach((h) => {
      stories.push(h);
    });
  });
  return sortByAZ(stories, "date");
});
const months = computed(() => {
  const months = [];
  histories.value.forEach((h) => {
    const new_date = `${new Date(h.date).getMonth() + 1}-${new Date(
      h.date
    ).getFullYear()}`;
    if (!months.includes(new_date)) {
      months.push(new_date);
    }
  });
  return months;
});
const labels = computed(() => {
  return months.value;
});
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const datasets = computed(() => {
  const datasets = [];
  //Pour chaque node
  nodes.value.forEach((node) => {
    const dataset = {
      label: node.address,
      data: [],
      backgroundColor: [node.color],
    };
    const rewards = [];
    //Pour chaque mois
    months.value.forEach((month) => {
      const monthRewards = [];
      //Pour chaque line de d'historique
      node.history.forEach((h) => {
        const h_date = `${new Date(h.date).getMonth() + 1}-${new Date(
          h.date
        ).getFullYear()}`;
        if (h_date === month) {
          monthRewards.push(h.amount);
        }
      });
      if (monthRewards.length) {
        dataset.data.push(monthRewards.reduce(reducer));
      } else {
        dataset.data.push(0);
      }
    });
    datasets.push(dataset);
  });
  return datasets;
});
</script>