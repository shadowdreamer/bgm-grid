<template>
  <CheckboxRoot
    v-model:checked="checkboxOne"
    class="size-[20px] appearance-none rounded overflow-hidden outline-none border"
  >
    <CheckboxIndicator
      class="size-full flex items-center justify-center"
      :class="`bg-${color} border-${color}`"

    >
      <Icon icon="carbon:checkmark" class="h-3.5 w-3.5 text-white" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { Icon } from "@iconify/vue";

const checkboxOne = defineModel<boolean>({default:false});
defineProps({
  color: {
    type:String,
    default:"primary"
  }
})
</script>
<style>
</style>