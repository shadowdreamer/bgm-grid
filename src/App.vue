<template lang="pug">
RouterView
</template>
<script setup>
import qs from 'qs'
import { onMounted, reactive, ref } from 'vue'
import Top from "./components/top.vue";
import Collections from "./components/collections.vue";
import { useBaseStore } from "@/store"
import { RouterView } from "vue-router";
const { authInfo ,getAuth } = useBaseStore()
 
 
onMounted(() => {
  const urlsearch = new URLSearchParams(window.location.search);
  let code = urlsearch.get('code');
  if (code) {
    getAuth(code);
  }
})

</script>
<style scoped></style>