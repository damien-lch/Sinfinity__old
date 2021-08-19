<template>
  <div class="mb-10">
    <h1>Welcome to Sinfinity</h1>
    <p>The beautifulest Sinovate Infinitinodes ROI explorer</p>
  </div>
  <h2>What's the point ?</h2>
  <p>
    I used to use a terminal based script to calculate my current infinitynodes
    ROI. But... a terminal is fuck*** ugly so... VOILA!
  </p>
  <Steps />
  <p class="text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
    pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia. Nulla a
    erat tellus.
  </p>
  <div class="flex justify-center w-full my-10">
    <Button @click="router.push({ name: 'Step1' })">
      Open the décoder <PresentationChartLineIcon class="text-white h-5 w-5" />
    </Button>
  </div>
</template>

<script setup>
import router from "../router/index";
import { PresentationChartLineIcon } from "@heroicons/vue/solid";
</script>