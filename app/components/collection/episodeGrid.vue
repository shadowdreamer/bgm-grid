<template lang="pug">
div(v-if="eps && Array.isArray(eps)" class="inline-grid grid-cols-12 gap-1")
  template(v-for="(ep,i) in eps")
    CollectionEpisodeTooltip(:ep="ep.episode" :type="ep.type" @update="refrashEps()" @watchTo="pathWatch(i)")
div(v-if="status=='pendding'" class="inline-grid grid-cols-12 gap-1 animate-pulse")
  .bg-gray-300.rounded-sm.size-8(v-for="i in 12")
</template>
<script setup lang="ts">

const props = defineProps<{
  id:any
}>()
const query = reactive({
  offset:0,
  limit:100,
})
const eps = ref<any[]>()
const status = ref('')
async function getEps() {
  status.value = 'pendding'
  const res = await PublicApi.getSubjectEpisodes(props.id, query)
  eps.value = res.data;
  status.value = 'success'
}
async function refrashEps() {
  const res = await PublicApi.getSubjectEpisodes(props.id, query)
  eps.value = res.data;
}

async function pathWatch(idx){
  let ids  = eps.value?.slice(0,idx) || [];  
  await patchEpisodesAsWatch(props.id,ids?.map(el=>el.episode.id));
  refrashEps();
}
onMounted(()=>{
  getEps();
})
</script>
<style>

</style>