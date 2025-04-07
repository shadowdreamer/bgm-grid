<template lang="pug">
form
  input(v-model="form.email")
  #example-container
</template>
<script setup lang="ts">
const form = reactive({
  email:'',
  passsword:'',
});
onMounted(()=>{
  // @ts-ignore
  window.onloadTurnstileCallback = function(){
    // @ts-ignore
  turnstile.render("#example-container", {
    sitekey: "0x4AAAAAAABkMYinukE8nzYS",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
    },
  });
  
  }
})
</script>
<style>

</style>