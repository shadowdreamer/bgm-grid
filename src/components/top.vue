<template lang="pug">
.flex.top-bar(v-if="userInfo")
  .flex-1
  img.avatar.mr-2(:src="userInfo.avatar.medium")
  div {{ userInfo.nickname }}
button(v-else @click="toAuthPage()") login
</template>
<script setup lang="ts">
import { useBaseStore } from "@/store"
import { storeToRefs } from "pinia";
const { userInfo } = storeToRefs(useBaseStore())
const { toAuthPage } = useBaseStore()

</script>
<style scoped lang="scss">
.top-bar {
  @apply flex py-2;

  .avatar {
    @apply object-contain w-6 h-6;
  }
}
</style>