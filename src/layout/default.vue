<template lang="pug">
Top
main#app_main(v-if="userInfo")
  RouterView(v-slot="{ Component }")
    KeepAlive(:include="['index']")
      component(:is="Component")

</template>
<script setup lang="ts">
import Top from '@/components/top.vue';
import { useBaseStore } from "@/store";
import { storeToRefs } from "pinia";
import { KeepAlive } from "vue";
const { userInfo } = storeToRefs(useBaseStore());
</script>
<style>

</style>