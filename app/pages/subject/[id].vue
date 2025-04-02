<template lang="pug">
.py-2(v-if="data")
  h1.text-2xl.font-bold {{ data.name }}
  h2.text-base {{ data.nameCN }}
.flex.gap-8(v-if="data")
  img.w-48(:src="data.images.large")
 
  div(class="w-[60%]")
    
    div.text-sm.leading-relaxed(v-html="data.summary")
</template>
<script setup lang="ts">
const route = useRoute();
// @ts-ignore
const { data,status } = useAsyncData("getSubject"+route.params?.id, () => getSubject(route.params?.id));
useSeoMeta({
  title: () =>  `${data.value?.name}| ${AppName}`,
  description:()=> data.value?.name_cn,
  ogTitle: () =>  `${data.value?.name}| ${AppName}`,
  ogDescription:()=> data.value?.info,
  ogImage:()=>data.value?.images?.common
});
onMounted(()=>{
  if(import.meta.dev){
    console.log(data.value);
    
  }
})

</script>
<style></style>
