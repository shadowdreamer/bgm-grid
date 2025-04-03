<template lang="pug">
div {{ status }}
.grid.grid-cols-2.gap-y-4.gap-x-8(class="max-md:grid-cols-1" v-if="Array.isArray(data?.data)")
  CollectionSubjectDialog(v-for="item in data.data" :data="item")
    CollectionSubjectCard(:data="item")
.grid.grid-cols-2.gap-y-4.gap-x-8(v-if="status=='pending'")
</template>
<script setup lang="ts">
const query:CollectionQuery = {
  subject_type:2,
  type:3,
}
const { data,status } = useAsyncData('getUserCollections', ()=>PublicApi.getUserCollections(query));
</script>
<style>

</style>