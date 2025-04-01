<template lang="pug">
.flex.gap-3.flex-wrap(v-if="Array.isArray(data)")
  div(v-for="item in data")
    .text-xl {{item.weekday?.cn}}
    NuxtLink.block.py-2(v-for="subject in item.items" :to="`/subject/${subject.id}`") {{subject.name_cn}}
</template>
<script setup lang="ts">
const { data,refresh } = useAsyncData('getCalendar',()=>getCalendar(),{
  server:false,
  immediate:true
});
onMounted(()=>{
  refresh();
})
</script>