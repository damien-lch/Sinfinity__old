<template>
  <div>
    <Section>
      <h1 class="mb-10">Welcome to this AMAZING website</h1>
      <h2>What's the point ?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
        pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.
        Nulla a erat tellus. Sed aliquam vitae sem sed ullamcorper. Fusce ipsum
        nibh, semper vitae augue quis, mattis imperdiet nunc. Proin malesuada
        leo nec augue accumsan interdum. Integer et quam id ligula placerat
        egestas non sit amet ante. Donec feugiat tellus ut turpis eleifend,
        sollicitudin iaculis elit molestie. Nunc iaculis turpis convallis
        bibendum ultrices. Mauris ac tempor ipsum, at pharetra quam. Praesent
        vitae cursus neque, eget eleifend libero. Quisque non ligula arcu.
        Phasellus consequat lorem ac augue elementum tincidunt. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <Steps />
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
        pretium blandit. Quisque at augue bibendum sapien imperdiet lacinia.
        Nulla a erat tellus.
      </p>
      <div class="flex justify-center w-full my-10">
        <Button @click="router.push('/step1')">
          Let's go <CheckCircleIcon class="text-white h-5 w-5" />
        </Button>
      </div>
    </Section>
  </div>
</template>

<script setup>
import router from "../router/index";
import { CheckCircleIcon } from "@heroicons/vue/solid";
</script>