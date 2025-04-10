<template lang="pug">
DialogRoot(v-model:open="open")
  DialogTrigger
    slot
  DialogPortal(to="#teleports")
    DialogOverlay( data-lenis-prevent class="bg-blackA4  data-[state=open]:animate-overlayShow fixed inset-0 z-[1000]")
      DialogContent(class='bg-white fixed translate-x-[-50%]   top-[10%] left-[50%]  data-[state=open]:animate-contentShow outline-none z-[1001] p-4 flex gap-4')
        div.w-48
          img.w-48.mb-2(:src="data.subject.images?.large")
          NuxtLink.block.text-sm.text-blue-700.mb-2(:to="`/subject/${data.subject.id}`") 查看条目
          a.block.text-sm.text-pink-800(target="_blank" :href="`https://bgm.tv/subject/${data.subject.id}`") 在Bangumi上查看
        div.w-144
          DialogTitle.text-xl.font-bold.mb-1 {{data.subject.name}}
          h2.text-base.text-gray-500.mb-2 {{data.subject.name_cn}}
          CollectionBox(:data="data")
          .p-2.bg-gray-50.mb-4
            .text-gray-600.mb-2.text-sm 大家将 {{ data.subject.name }} 标注为
            .flex.gap-2.flex-wrap.max-w-144
              button(class="rounded-full bg-white whitespace-nowrap px-2 hover:bg-blue-400 group" v-for="tag in props.data.subject?.tags || []") 
                span.text-xs.text-blue-500.mr-1(class="group-hover:text-white") {{ tag.name }}
                span.text-xxs.text-gray-300(class="group-hover:text-white") {{ tag.count }}
          .mb-4
            CollectionEpisodeGrid(v-if="open" :id="props.data.subject.id")
          //- template(v-if="info && infoStatus=='success'")
          //-   p.text-sm.whitespace-pre-wrap(v-html="info.summary")
          //- div(v-if="infoStatus=='pending'" class="animate-pulse")
          //-   .bg-gray-300.h-4.w-72.rounded.mb-1
          //-   .bg-gray-300.h-4.w-32.rounded.mb-1
          //-   .bg-gray-300.h-4.w-18.rounded.mb-1
 
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
const collectForm = reactive({
  type:0,
  private:false,
  tags:[],
  // ep_status:0,
  rate:0,
  comment:'',
});
onMounted(()=>{
  collectForm.type = props.data.type
  collectForm.private = props.data.private
  collectForm.tags = props.data.tags
  // collectForm.ep_status = props.data.ep_status
  collectForm.rate = props.data.rate
  collectForm.comment = props.data.comment
})
// const { data:info,status:infoStatus,execute:getInfo } = useAsyncData("getSubject"+props.data.subject.id, () => getSubject(props.data.subject.id),{
//   server:false,
//   immediate:false
// });
// watch(open,()=>{
//   if(open.value){
//     getInfo();
//   }
// })

async function submitChange() {
 const res = await updateSubjectCollction(props.data.subject.id,collectForm)
}
 
</script>
<style lang="postcss">
 
</style>
