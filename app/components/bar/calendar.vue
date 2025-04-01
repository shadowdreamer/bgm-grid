<template lang="pug">
.flex.gap-3.flex-wrap(v-if="Array.isArray(data)")
  div(v-for="item in data")
    .text-xl {{item.weekday?.cn}}
    div.py-1(v-for="subject in item.items")
      NuxtLink( :to="`/subject/${subject.id}`") {{subject.name_cn ||subject.name }}
</template>
<script setup lang="ts">
const { data,refresh } = useAsyncData('getCalendar',()=>getCalendar());
</script>