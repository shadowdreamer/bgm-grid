<template lang="pug">
DialogRoot(v-model:open="open")
  DialogTrigger
    slot
  DialogPortal(to="#teleports")
    DialogOverlay( data-lenis-prevent class="bg-blackA4  data-[state=open]:animate-overlayShow fixed inset-0 z-[1000]")
      DialogContent(class='bg-white fixed translate-x-[-50%]   top-[10%] left-[50%]  data-[state=open]:animate-contentShow outline-none z-[1001] p-4 flex gap-4')
        div
          img.w-48(:src="data.subject.images?.large")
        div.w-144
          DialogTitle.text-xl.font-bold.mb-1 {{data.subject.name}}
          h2.text-base.text-gray-500.mb-2 {{data.subject.name_cn}}
          .mb-4
            CollectionEpisodeGrid(v-if="open" :id="props.data.subject.id")

          template(v-if="info && infoStatus=='success'")
            p.text-sm.whitespace-pre-wrap(v-html="info.summary")
          div(v-if="infoStatus=='pending'" class="animate-pulse")
            .bg-gray-300.h-4.w-72.rounded.mb-1
            .bg-gray-300.h-4.w-32.rounded.mb-1
            .bg-gray-300.h-4.w-18.rounded.mb-1
 
</template>
<script setup lang="ts">
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from "radix-vue";
import { Icon } from "@iconify/vue";
const open = defineModel<boolean>({default:false})
const props = defineProps<{
  data:any
}>()

const { data:info,status:infoStatus,execute:getInfo } = useAsyncData("getSubject"+props.data.subject.id, () => getSubject(props.data.subject.id),{
  server:false,
  immediate:false
});
watch(open,()=>{
  if(open.value){
    getInfo();
  }
})


 
</script>
<style lang="postcss">
 
</style>
