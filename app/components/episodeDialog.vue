<template lang="pug">
DialogRoot(v-model:open="isOpen")
  DialogTrigger.ep(:data-type="ep.type" :key="ep.episode.ep") 
    slot
  DialogPortal(to="#portal")
    DialogOverlay(class='data-[state=open]:animate-fade animate-duration-200 fixed inset-0 z-30')
      DialogContent(class=" animate-duration-200 data-[state=open]:animate-animate-jump-in fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white focus:outline-none z-[100] p-4 shadow")
        DialogTitle {{ep.episode.name}}
        DialogDescription
          p {{ep.episode.name_cn}}
          p {{ep.episode.airdate}}
          p {{ep.episode.duration}}
          p {{ep.episode.desc}}
        .flex.gap-3
          button.ep-option(@click="handleOption(3)") 抛弃
          button.ep-option(@click="handleOption(0)") 撤销
          button.ep-option(@click="handleOption(1)") 想看
          button.ep-option(@click="handleOption(2)") 看过
          button.ep-option(@click="handleOption(2)") 看到
          
</template>
<script setup lang="ts">
import { updateEpisode } from "@/api/common";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import { ref } from "vue";
const props = defineProps<{
  ep:any,
}>()
const emit = defineEmits(['update'])
const isOpen = ref(false);
async function handleOption(type){
  await updateEpisode(props.ep.episode.id,type);
  isOpen.value = false;
  emit('update')

}
</script>
<style>
.ep{
  @apply aspect-square flex justify-center items-center rounded border text-sm
  data-[type=0]:bg-blue-50 data-[type=0]:text-blue-400 data-[type=0]:border-blue-400 
  data-[type=1]:bg-pink-200 data-[type=1]:text-pink-400 data-[type=1]:border-pink-400 
  data-[type=2]:bg-blue-400 data-[type=2]:text-white data-[type=2]:border-blue-400 
  data-[type=3]:bg-gray-200 data-[type=3]:text-gray-400 data-[type=3]:border-gray-400
  
  ;
}
</style>