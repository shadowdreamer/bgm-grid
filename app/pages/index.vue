<template lang="pug">
TrendingAnime
.flex.py-10.flex-wrap.gap-8
  //- .flex-1.min-w-96(v-if="userData")
  //-   ClientOnly
  //-     CollectionGrid
  BarCalendar
</template>
<script setup lang="ts">

useSeoMeta({
  title: () =>  AppName,
  description:()=> AppDesc,
  ogTitle: () =>  AppName,
  ogDescription:()=> AppDesc,
});

const {userData} = storeToRefs(useAppData())

</script>
<style>

</style>