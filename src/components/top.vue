<template lang="pug">
.flex.top-bar(v-if="baseStore.userInfo")
  .flex-1
  img.avatar.mr-2(:src="baseStore.userInfo.avatar.medium")
  div {{ baseStore.userInfo.nickname }}
</template>
<script setup>
import { useBaseStore } from "@/store"
const baseStore = useBaseStore();

</script>
<style scoped lang="scss">
.top-bar{
  @apply flex py-2;
  .avatar{
    @apply object-contain w-6 h-6;
  }
}
</style>