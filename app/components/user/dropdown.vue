<template lang="pug">
DropdownMenuRoot
  DropdownMenuTrigger 
    div {{ userData.nickname }}
  DropdownMenuPortal(to="#teleports")
    DropdownMenuContent(:side-offset="5" as='ul' class='right-0 z-[5000] overflow-hidden outline-none bg-white rounded-md will-change-[opacity,transform] animate-fade-down animate-duration-200 shadow-lg py-1 w-32' position="popper"  side="bottom"  align="end")
      li.px-3(class="hover:bg-gray-50") 
       button.block.py-2(@click="logout()") 退出

</template>
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue';

const { logout } = useAppData()
const {userData} = storeToRefs(useAppData())

</script>
<style>

</style>