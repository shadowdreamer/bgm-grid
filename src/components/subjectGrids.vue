<template lang="pug">
.ep-warp.w-full.p-3(v-if="res")
  .w-full.grid.grid-cols-8.gap-2
    episodeDialog(v-for="item in mainEp" :ep="item" :key="item.episode.ep" @update="refresh") {{item.episode.ep}}
    .sp_tag(v-if="spEp.length>0") SP
    episodeDialog(v-for="(item,i) in spEp" :ep="item" :key="'sp'+i" @update="refresh") {{i+1}}
</template>
<script setup lang="ts">
import { getCollectionsEpospdes } from "@/api/common";
import { useBaseStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import episodeDialog from '@/components/episodeDialog.vue'
const props = defineProps<{
  subject_id:string
}>();

const { userInfo } = storeToRefs(useBaseStore());
const { data:res,isFinished, execute:refresh } = getCollectionsEpospdes(userInfo, props.subject_id ,
  ref({
    offset:0,
    limit:100,
  })
)
watch(res,()=>{
  console.log(res);
  
})
const mainEp = computed(()=>{
  if(!isFinished)return []
  return res.value.data?.filter(el=>el.episode.type==0)
})
const spEp = computed(()=>{
  if(!isFinished)return []
  return res.value.data?.filter(el=>el.episode.type==1)
})
</script>
<style scoped lang="postcss">
.ep-warp{
  @apply bg-white rounded shadow animate-fade-up animate-duration-200;
}
.ep{
  @apply aspect-square flex justify-center items-center rounded border text-sm
  data-[type=0]:bg-blue-50 data-[type=0]:text-blue-400 data-[type=0]:border-blue-400 
  data-[type=1]:bg-pink-200 data-[type=1]:text-pink-400 data-[type=1]:border-pink-400 
  data-[type=2]:bg-blue-400 data-[type=2]:text-white data-[type=2]:border-blue-400 
  data-[type=3]:bg-gray-200 data-[type=3]:text-gray-400 data-[type=3]:border-gray-400
  
  ;
}
.sp_tag{
  @apply  aspect-square flex justify-center items-center text-sm
    bg-lime-50 text-lime-500 border-l-2 border-l-lime-500;
}
</style>