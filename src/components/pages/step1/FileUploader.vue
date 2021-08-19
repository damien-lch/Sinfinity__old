<template>
  <Button :isLoading="loadingFile" @clicked="openUploader()">
    Choose your history file
    <UploadIcon class="text-white h-5 w-5" />
  </Button>
  <input
    class="hidden"
    type="file"
    ref="fileUploader"
    accept=".csv"
    @change="(e) => processFile(e)"
  />
</template>

<script setup>
import { ref } from "vue";
import { UploadIcon } from "@heroicons/vue/solid";
const emits = defineEmits(["file-uploaded"]);
const fileUploader = ref(null);
const loadingFile = ref(false);
const openUploader = () => {
  loadingFile.value = true;
  fileUploader.value.click();
};
const processFile = (e) => {
  const file = e.target.files[0];
  emits("file-uploaded", file);
  const loadingFile = ref(false);
};
</script>