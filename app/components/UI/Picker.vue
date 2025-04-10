<template lang="pug">
SelectRoot.relative(v-model="value" v-bind="attrs")
  SelectTrigger.w-full.outline-none
    template(v-if="$slots.default")
      slot
    template(v-else)
      .flex.justify-between.py-3.px-5(class="rounded-lg border border-graye0 relative")
        input(required autocomplete="none" @change="checkValue" :value="options.find(el=>el.value==value)?.text" class="!bg-transparent pointer-events-none"  
        placeholder="请选择")
        Icon(icon="carbon:chevron-down" class="h-5 w-5 text-gray999")
  SelectPortal(to="#teleports")
    SelectContent( class="z-[5000] absolute bg-white rounded-lg   min-w-[var(--radix-select-trigger-width)]  data-[state=open]:animate-fade-down  shadow-lg animate-duration-200  data-[side=top]:animate-fade-top data-[side=right]:animate-fade-right  data-[side=bottom]:animate-fade-down data-[side=left]:animate-fade-left" position="popper" )
      SelectViewport
        SelectGroup
          SelectItem.text-sm.px-4.py-3.outline-none.whitespace-nowrap(class="hover:bg-neutral-100 cursor-pointer" v-for="item in options" :key="item.value" :value="String(item.value)") {{item.text}}
</template>
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { Icon } from "@iconify/vue";
const value = defineModel<any>()
const props = defineProps<{
   options:{text:string, value:any}[]
}>()
const attrs = useAttrs();
function checkValue(ev){
  const val = ev.target.value;
  const item = props.options.find(el=>el.text==val);
  if(item){
    value.value = item.value;
  }else{
    value.value = undefined;
    ev.target.value = '';
  }
}
</script>
<style>

</style>