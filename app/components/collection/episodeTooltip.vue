<template lang="pug">
TooltipRoot(:delayDuration="20")
  TooltipTrigger
    .text-center.inline-block.bg-blue-100 {{ep.ep}}
  TooltipPortal
    TooltipContent(class=" rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none z-20001")
      div {{ep.name}}
</template>
<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from 'radix-vue'

defineProps<{
  ep:any
  type:any
}>()
</script>
<style>

</style>