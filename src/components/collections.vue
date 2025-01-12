<template lang="pug">
.grid-warp.relative(ref="warpRef")
  collcCard(v-for="(item,i) in collcData?.data" :key="item.subject_id" :data="item" :tabindex="i" 
    @click="toSubject(item.subject,i)" ref="cardsRef")
</template>
<script setup lang="ts">
import { onActivated, ref, useTemplateRef, watch } from 'vue';
import { getCollections } from '@/api/common';
import collcCard from './collcCard.vue'
import gsap,{Linear} from "gsap";

import { useBaseStore } from "@/store"
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const warpRef = useTemplateRef("warpRef")
const cardsRef = useTemplateRef("cardsRef")
const router = useRouter();
const { userInfo } = storeToRefs(useBaseStore());
const { data:collcData,execute:refresh } = getCollections(
  userInfo,
  ref({type:3,subject_type:2})
)
const viewingCard = ref(null)
function toSubject(data,i){
  const rect = cardsRef.value[i].$el.getBoundingClientRect();
  const warpRect = warpRef.value.getBoundingClientRect();

  const top = Math.min(rect.top, rect.top - warpRect.top);
  const relativeRect = {
    top: top,
    left: rect.left - warpRect.left,
    width: rect.width,
    height: rect.height
  };

  viewingCard.value = i;
  gsap.set(cardsRef.value[i].$el,{
    x:-(rect.left - warpRect.left),
    y:-top,
  })
  router.push({
    name:"subject",
    state:{
      rect:JSON.stringify(relativeRect),
      subject:JSON.stringify(data)
    },
    query:{subject_id:data.id}
  })
}
onActivated(()=>{
  if(viewingCard.value){
    gsap.fromTo(cardsRef.value[viewingCard.value ].$el,{
      rotate:30
    },{
      rotate:0,
      x:0,
      y:0,
      duration:0.1,
      ease:Linear.easeIn,
      onComplete:()=>{
        refresh()
      }
    })
  }else{
    refresh()
  }
})
</script>
<style scoped lang="postcss">
.grid-warp{
  @apply  grid grid-cols-2 gap-4 max-md:grid-cols-1 relative;
}
</style>