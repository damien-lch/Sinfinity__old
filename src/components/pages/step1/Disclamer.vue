<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="rounded-md bg-indigo-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon
          class="h-5 w-5 text-indigo-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-indigo-800">Please note that :</h3>
        <div class="mt-2 text-sm text-indigo-700">
          <ul role="list" class="list-disc pl-5 space-y-1">
            <li>
              Your file and its content will never be send to ours servers
            </li>
            <li>
              Your file needs to be an .csv (natively exported from the
              Sinovate's wallet)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon } from "@heroicons/vue/solid";

export default {
  components: {
    InformationCircleIcon,
  },
};
</script>