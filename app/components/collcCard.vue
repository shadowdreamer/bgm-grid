<template lang="pug">
.coll-card
  .cover(:style="{backgroundImage:`url(${subject.images.small})`}")
    .score 
      span.f.text-2xl {{ subject.score|0 }}
      span.text-base .
      span.d.text-base {{ subject.score * 10 %10 }}
  .flex.flex-col.pt-2.flex-1.px-2
    .title {{ subject.name }}
    .title_cn.mb-2 {{ subject.name_cn }}
    .flex.flex-wrap.gap-x-2.gap-y-1
      .tags(v-for="(item,i) in cuttedTags.filter(el=>!!el)" :key="item?.name" :style="{opacity:1/1.1**i}") 
        span {{ item?.name }}
    .flex-1
    .flex.items-center.mb-1(v-if="filled")
      .progress-bar.mr-2
        .over(:style="{width:filled}")
      .status {{ data.ep_status }}/{{ subject.eps }}

</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()
const cardRef = ref<HTMLElement>()
const props = defineProps(["data"]);
const data = reactive(props.data)
const subject = data.subject;

const filled = computed(()=>{
  if(!data.ep_status)return false;
  const ep_status = data.ep_status;
  const eps = data.subject.eps;
  return `${ep_status}%`
})
const cuttedTags = computed(()=>{
  let showd = [];
  let tags = data.subject.tags;
  let len = 0,i=0;
  while(len<40){
    showd.push(tags[i]);
    len+=(byteLenth(tags[i]?.name) +2);
    i++;
  };
  return showd;
})



</script>
<style scoped lang="postcss">
.coll-card{
  @apply aspect-[2.7] flex  bg-white rounded-md overflow-hidden shadow-sm    transition-all
  active:bg-slate-50 focus:shadow-md;
  .cover{
    @apply  h-full w-1/4  bg-cover relative;
    .score{
      @apply absolute w-12 h-14 bottom-1 right-2 bg-cover bg-center text-white flex  justify-center items-baseline whitespace-nowrap
        pt-5 select-none;
    

    }
  }
  .title{
    @apply text-gray-500 text-xs;
  }
  .title_cn{
    @apply text-base;
  }
  .tags{
    @apply whitespace-nowrap text-xs bg-blue-400 text-white rounded-sm px-1 py-1;
  }
  .progress-bar{
    @apply h-[10px] bg-gray-200 w-full rounded-full relative overflow-hidden;
    .over{
      @apply h-full bg-blue-400 rounded-full absolute;
    }
  }
  .status{
    @apply text-xs text-gray-400
  }
 }
</style>