<template lang="pug">
div(v-if="data")
  div {{data.name}}
  div {{data.summary}}
</template>
<script setup lang="ts">
const route = useRoute();
const { data,refresh } = useAsyncData("getCalendar", () => getSubject(route.params.id));
 
useSeoMeta({
  title: () =>  data.value?.name,
});
onMounted(()=>{
  !data.value && refresh();
})
</script>
<style></style>
