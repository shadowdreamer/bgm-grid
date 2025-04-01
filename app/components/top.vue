<template lang="pug">
.flex.px-4.py-4.bg-pink-50
  NuxtLink(to="/") Home
  .flex-1 
  template(v-if="userData")
    div {{ userData.nickname }}
  button(v-else @click="toAuthPage()") login
</template>
<script setup lang="ts">
const { toAuthPage } = useAppData()
const {userData} = storeToRefs(useAppData())
</script>
