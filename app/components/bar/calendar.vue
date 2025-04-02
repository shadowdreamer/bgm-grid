<template lang="pug">
.flex.gap-3.flex-wrap(v-if="data")
  div(v-for="day in Object.keys(data)")
    .text-xl {{day}}
    div.py-1(v-for="data in data[day]")
      NuxtLink( :to="`/subject/${data.subject.id}`") {{data.subject.nameCN ||data.subject.name }}
</template>
<script setup lang="ts">
const { data,refresh } = useAsyncData('getCalendarNext',()=>nextSsrApi.getCalendar());
</script>