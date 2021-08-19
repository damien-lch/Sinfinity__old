<template>
  <div
    style="height: 400px; width: 600px; display: flex; flex-direction: column"
  >
    <vue3-chart-js
      ref="chartRef"
      :id="doughnutChart.id"
      :type="doughnutChart.type"
      :data="doughnutChart.data"
      @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script setup>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { computed, reactive, watch, ref } from "vue";
const chartRef = ref(null);
const props = defineProps({
  labels: Array,
  datasets: Array,
});
const labels = computed(() => {
  return props.labels;
});
const datasets = computed(() => {
  return props.datasets;
});

const doughnutChart = reactive({
  id: "doughnut",
  type: "bar",
  data: {
    labels: labels.value,
    datasets: datasets.value,
  },
});

watch(
  () => [labels, datasets],
  (values, prevState) => {
    const labels = values[0].value;
    const datasets = values[1].value;
    doughnutChart.data.labels = labels;
    doughnutChart.data.datasets = datasets;
    chartRef.value.update(250);
  },

  { deep: true }
);

const beforeRenderLogic = (event) => {
  //...
  //if(a === b) {
  //  event.preventDefault()
  //}
};
</script>