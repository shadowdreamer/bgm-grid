<template lang="pug">
.coll-card
  .cover(:style="{backgroundImage:`url(${data.subject.images.small})`}")
    .score
  .flex.flex-col.pt-2.flex-1.px-2
    .title {{ data.subject.name }}
    .title_cn.mb-2 {{ data.subject.name_cn }}
    .flex.flex-wrap.gap-x-2.gap-y-1
      .tags(v-for="(item,i) in cuttedTags" :key="item.name" :style="{opacity:1/1.1**i}") 
        span {{ item.name }}
    .flex-1
    .flex.items-center.mb-1
      .progress-bar.mr-2
        .over(:style="{width:filled}")
      .status {{ data.subject.eps }}/{{ data.ep_status }}

</template>
<script setup>
import { computed, onMounted, reactive } from 'vue';
import { byteLenth } from '@/utils/tools'
const props = defineProps(["data"]);
const data = reactive(props.data)
const filled = computed(()=>{
  const ep_status = data.ep_status;
  const eps = data.subject.eps;
  return `${ep_status}%`
})
const cuttedTags = computed(()=>{
  let showd = [];
  let tags = data.subject.tags;
  let len = 0,i=0;
  while(len<56){
    showd.push(tags[i]);
    len+=(byteLenth(tags[i].name)+2);
    i++;
  };
  return showd;
})
onMounted(() => {
  console.log(data);
})

</script>
<style scoped lang="scss">
.coll-card{
  @apply flex  bg-white rounded-md overflow-hidden shadow-sm aspect-[1.61/0.6]  transition-all
  active:bg-slate-50 focus:shadow-md;
  .cover{
    @apply aspect-[1/1.2] bg-cover relative;
    .score{
   
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