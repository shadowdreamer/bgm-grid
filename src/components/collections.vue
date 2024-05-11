<template lang="pug">
.grid-warp
  collcCard(v-for="(item,i) in collcData" :key="item.subject_id" :data="item" :tabindex="i")
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import { getCollections } from '@/api/common.js';
import collcCard from './collcCard.vue'
import { useBaseStore } from "@/store"
const baseStore = useBaseStore();

const collcData = reactive([])
onMounted(() => {
  getCollData()
})
async function getCollData(){
  const getMyColl = getCollections(baseStore.userInfo.username);
  const res = await getMyColl();
  collcData.length = res.data.length;
  Object.assign(collcData,res.data);
}
</script>
<style scoped lang="scss">
.grid-warp{
  @apply  grid grid-cols-2 gap-4 max-sm:grid-cols-1
}
</style>