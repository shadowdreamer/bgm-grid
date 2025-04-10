<template lang="pug">
div
  .flex
    input(type="search" v-model="query.keyword")
  .flex.gap-1.text-xxs
    button(v-for="item in Object.keys(SubjectTypeText)"
      :data-active="filterType.includes(item)"
      @click="toggleItemInArray(filterType,item)"
      class=""
      ) {{SubjectTypeText[item]}}
</template>
<script setup lang="ts">
 
 

const query = reactive({
  keyword:'',
  sort:'rank',
})
const filterType =  ref<any[]>([2])
onMounted(()=>{
   
  
})
</script>
<style>

</style>