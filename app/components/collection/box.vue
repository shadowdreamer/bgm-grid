<template lang="pug">
.w-144
  .mb-2
    .inline-flex.overflow-hidden.bg-gray-100.rounded
      button(v-for="key in Object.keys(CollectionTypeText)" 
        :data-active="collectForm.type == Number(key)"
        @click="collectForm.type=Number(key)"
        class="text-xs py-1 border-b-4 border-b-transparent px-4 hover:border-b-pink-500 data-[active=true]:bg-pink-500 data-[active=true]:text-white") 
        span {{ CollectionTypeText[key] }} 
  .mb-2
    .flex.text-sm.items-center
      span.mr-2 我的评分
      span {{ collectForm.rate }}
    UIStarRate(:rate="collectForm.rate" :edit="true" @change="collectForm.rate=$event")
  textarea.p-1.rounded.text-sm.mb-2(v-model="collectForm.comment" class="w-2/3 outline-none border focus:bg-pink-50 focus:border-pink-300")
  .flex.mb-4.items-center(class="w-2/3")
    UICheckbox.mr-2(v-model="collectForm.private") 
    span.text-sm 仅自己可见
    .flex-1
    button.text-sm.text-white.bg-pink-400.px-3.py-1.rounded-md(@click="submitChange()") 提交
</template>
<script setup lang="ts">
const props = defineProps<{
  data:any
}>()
const collectForm = reactive({
  type:0,
  private:false,
  tags:[],
  // ep_status:0,
  rate:0,
  comment:'',
});
onMounted(()=>{
  collectForm.type = props.data?.type || 0
  collectForm.private = props.data?.private || false
  collectForm.tags = props.data?.tags || []
  // collectForm.ep_status = props.data?.ep_status
  collectForm.rate = props.data?.rate || 0
  collectForm.comment = props.data?.comment || ''
})
async function submitChange() {
 const res = await updateSubjectCollction(props.data.subject.id,collectForm)
}
 
</script>
<style>

</style>