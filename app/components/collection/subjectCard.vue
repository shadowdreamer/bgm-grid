<template lang="pug">
.text-left.bg-whiteA2.shadow-none(class="hover:shadow relative border border-gray-100 transition-shadow")
  .flex.gap-2
    img.size-18.object-cover(:src="data.subject.images?.grid")
    .pt-1
      div.text-sm.text-blue-500(class="hover:text-blue-400") {{data.subject.name}}
      div.text-xs.text-gray-500.mb-1 {{ data.subject.name_cn }}
      div.text-xs.text-gray-500 
        span {{ data.subject.date}} /
        span {{ data.subject.collection_total }}人收藏
  .absolute.text-pink-100.right-2.bottom-3 
    span.text-3xl {{String(data.subject.score).split('.')[0]}}
    span .
    span {{String(data.subject.score).split('.')[1] || '0'}}
  .h-2.bg-pink-50(:style="{'--progress':`${data.ep_status/(data.subject.eps || data.ep_status*2)*100}%`}")
    .h-2(class="bg-pink-200 w-[var(--progress)]")
</template>
<script setup lang="ts">
defineProps<{
  data:any
}>()
</script>
<style>

</style>