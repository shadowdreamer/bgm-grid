<template lang="pug">
.grid.grid-cols-2(v-if="Array.isArray(data?.data)")
  div(v-for="item in data.data")
    NuxtLink(:to="`/subject/${item.id}`") {{item.name}}
</template>
<script setup lang="ts">
const query:CollectionQuery = {
  subjectType:2,
  type:3,
}
const { data,refresh } = useAsyncData('collction_subject', ()=>collectionSubjects(query));
</script>
<style>

</style>