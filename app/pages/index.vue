<template lang="pug">
.flex.py-10.flex-wrap
  .flex-1.min-w-96
    ClientOnly
      CollectionGrid
  BarCalendar
</template>
<script setup lang="ts">
useSeoMeta({
  title: () =>  AppName,
  description:()=> AppDesc,
  ogTitle: () =>  AppName,
  ogDescription:()=> AppDesc,
});
</script>
<style>

</style>