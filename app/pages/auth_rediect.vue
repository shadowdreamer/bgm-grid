<template lang="pug">
div E:\bgm-grid\app\pages\auth_rediect.vue
</template>
<script setup lang="ts">
 
const route = useRoute();
const { getToken } = useAppData();
onMounted(async ()=>{
  if(route.query.code){
    getToken(route.query.code)
    
  }
})
</script>
<style>

</style>