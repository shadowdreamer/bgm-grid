<template>
  <div class="w-[240px] py-2" @mouseleave="mouseleave()">
    <svg class="w-full"  viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          v-for="i in 10"
          :d="`M${i*2-2}8.0007 1.6667 l -2.0377 4.1592 l -4.6285 0.6712 l 3.353 3.278 l -0.8015 4.5583 l 4.1147 -2.1936 l 4.1156 2.1936 l -0.7956 -4.5583 l 3.3471 -3.278 l -4.6029 -0.6712 l -2.0642 -4.1592 z`"
          :fill="colors[i-1]" :stroke="colors[i-1]" stroke-width="1.66667" stroke-linejoin="round" 
          @mouseenter="hoveringStar(i)" 
          @click="handleClick(i)"
          />
 
      </g>

      
    </svg>
  </div>




</template>
<script setup lang="ts">
 
const id = useId();
const props = withDefaults(defineProps<{
  rate:number,
  edit?:boolean
}>(),{
  rate:5.0,
  edit:false,
})
const _hovering = ref(false)
const _hoverIndex = ref(0)
const colors = computed(()=>{
  return Array.from({length:10}).map((_,i)=>{
    if(_hovering.value){
      return  i+1 > _hoverIndex.value ?
      "#ECECEC": "#FBC866"
    }else{
      return i+1 > props.rate ?
      "#ECECEC": "#FBC866"
    }

  })
})
function getFill(index){
  if(_hovering.value){
    return  index > _hoverIndex.value ?
    "#ECECEC": "#FBC866"
  }else{
    return  props.rate > _hoverIndex.value ?
    "#ECECEC": "#FBC866"
  }
}
function hoveringStar(i){
  _hovering.value = true
  _hoverIndex.value = i
}
function mouseleave(){
  _hovering.value = false;
}
const emit = defineEmits(['change',])
function handleClick(i){
  emit('change',i)
}
</script>
<style></style>