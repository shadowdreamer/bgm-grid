<template lang="pug">
div(v-if="data")
  img.w-48(:src="data.images.large")
  div {{data.name}}
  div.whitespace-pre-line(v-html="data.summary")
</template>
<script setup lang="ts">
const route = useRoute();
const { data,status } = useAsyncData("getSubject"+route.params.id, () => getSubject(route.params.id));
useSeoMeta({
  title: () =>  `${data.value?.name}| ${AppName}`,
  description:()=> data.value?.name_cn,
  ogDescription:()=> data.value?.name_cn,
  ogImage:()=>data.value?.images?.common
});
onMounted(()=>{
  if(import.meta.dev){
    console.log(data.value);
    
  }
})

</script>
<style></style>
