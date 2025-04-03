<template lang="pug">
div(v-if="eps && Array.isArray(eps)" class="grid grid-cols-10 gap-1")
  div(v-for="ep in eps" class="bg-blue-100")
    CollectionEpisodeTooltip(:ep="ep.episode" :type="ep.type")
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
async function getEps() {
  const res = await PublicApi.getSubjectEpisodes(props.id, query)
  eps.value = res.data;
}
onMounted(()=>{
  getEps();
})
</script>
<style>

</style>