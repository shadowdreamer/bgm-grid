<template lang="pug">
.grid-warp
  .flex.flex-col.gap-2
    collcCard(:data="{subject}" ref="cardRef" :style="fromPositon" v-if="subject?.id")
    subjectGrids(:subject_id="subject_id")
  .cols2
</template>
<script setup lang="ts">
import collcCard from '@/components/collcCard.vue'
import subjectGrids from '@/components/subjectGrids.vue'
import { getCollectionsEpospdes, getSubject } from "@/api/common";
import { useBaseStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onMounted, reactive, ref,type  StyleValue, useTemplateRef } from "vue";
import { useRoute, useRouter } from "vue-router";
import gsap,{Linear, Power0} from "gsap";

const router = useRouter();
const route = useRoute();
const subject_id = route.query.subject_id as string
const { userInfo } = storeToRefs(useBaseStore());
const cardRef = useTemplateRef('cardRef')
const subject = reactive(history.state?.subject?JSON.parse(history.state.subject):{})
const fromRect = reactive(history.state?.rect?JSON.parse(history.state.rect):null)

const { data:serverSubject,  } = getSubject( route.query.subject_id as string );

const fromPositon = computed<StyleValue>(()=>{
  if(!fromRect)return{}
  return {
    transform:`translate(${fromRect.left}px, ${fromRect.top}px)`,
  };
})
onBeforeMount(()=>{
   Object.assign(subject,serverSubject.value)
})
onMounted(()=>{
  gsap.fromTo(cardRef.value.$el,{
    rotate:-60
  },{
    x:0,
    y:0,
    rotate:0,
    ease:Linear.easeOut,
    duration:0.1
  })
 
})
</script>
<style>
.grid-warp{
  @apply  grid grid-cols-2 gap-4 max-md:grid-cols-1 relative;
}
</style>