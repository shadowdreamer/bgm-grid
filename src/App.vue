<template lang="pug">
Top
Collections
button(@click="login" v-if="!baseStore.authInfo") login
</template>
<script setup>
import qs from 'qs'
import { onMounted, reactive, ref } from 'vue'
import Top from "./components/top.vue";
import Collections from "./components/collections.vue";
import { useBaseStore } from "@/store"
const baseStore = useBaseStore()
 
function login () {
  window.location.href = `https://bgm.tv/oauth/authorize?${qs.stringify({
    client_id: 'bgm1345aaf31ef839bc',
    response_type: 'code',
    redirect_uri: encodeURI('https://dovahkiin.top')
  })}`
}
onMounted(() => {
  const urlsearch = new URLSearchParams(window.location.search);
  let code = urlsearch.get('code');
  if (code) {
    baseStore.getAuth(code);
  }
  if(baseStore.authInfo){
    baseStore.getME();
  }
})

</script>
<style scoped></style>