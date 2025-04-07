<template lang="pug">
TooltipRoot(:delayDuration="20")
  TooltipTrigger.ep-cell(:class="episodeStatusKeys[type]")
    | {{String(ep.ep).padStart(2,'00')}}
  TooltipPortal
    TooltipContent(class="w-80 rounded-[4px] bg-white z-20001 shadow" align="start" side="bottom")
      TooltipArrow.fill-pink-300
      .bg-pink-300.px-4.py-2.text-white.rounded.line-clamp-2  ep.{{ep.ep}} {{ep.name}}
      .px-2.text-sm.py-2
        div(v-if="ep?.name_cn") 中文标题：{{ep?.name_cn}}
        div(v-if="ep?.airdate") 首播：{{ep?.airdate}}
        div(v-if="ep?.duration") 时长：{{ep?.duration}}
        div.text-sm 讨论（+<span>{{ep.comment}}</span>）
      .flex.px-2.pb-2.items-center
        button.watch-btn.bg-gray-100(@click="watchTo") 看到
        .flex-1
        .flex.bg-gray-100.rounded-sm.gap-2
          button.watch-btn(:data-active="type==episodeStatus.Dropped" @click="putState(episodeStatus.Dropped)") 抛弃
          button.watch-btn(:data-active="type==episodeStatus.WantToWatch" @click="putState(episodeStatus.WantToWatch)") 想看
          button.watch-btn(:data-active="type==episodeStatus.Watched" @click="putState(episodeStatus.Watched)") 看过

</template>
<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from 'radix-vue'

const props =  defineProps<{
  ep:any
  type:any
}>();
const emit = defineEmits(['update','watchTo'])
async function putState(type){
  await putEpisodeDetails(props.ep.id,type);
  emit('update')
}
async function watchTo() {
  emit('watchTo')
}

</script>
<style>
.ep-cell{
  @apply text-sm  text-center inline-block size-8 rounded-sm border border-transparent text-blue-600 border-blue-600 bg-blue-200;
}
.WantToWatch{
  @apply text-pink-600 border-pink-600 bg-pink-300;
}
.Watched{
  @apply text-blue-200 border-blue-600 bg-blue-600;
}
.Dropped{
  @apply text-white border-gray-600 bg-gray-300;
}
.watch-btn{
  @apply text-sm px-3 py-2 data-[active=true]:bg-pink-300 data-[active=true]:text-white rounded hover:bg-pink-200;
}
</style>