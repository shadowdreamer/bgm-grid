import {  defineStore } from 'pinia'
import qs from 'qs';

export const useAppData = defineStore('app', () => {
  const token = ref("");
  const {data:userData, execute:getUserInfo} = useAsyncData('userInfo',()=>getMe(),{server:false,immediate:false})
  watch(token,(val)=>{
    if(val){
      getUserInfo()
    }
  },{immediate:true})

  function toAuthPage () {
    window.location.href = `https://bgm.tv/oauth/authorize?${qs.stringify({
      client_id: 'bgm1345aaf31ef839bc',
      response_type: 'code',
      redirect_uri: encodeURI('https://bgm.dovahkiin.top/auth_rediect')
    })}`
  }
  async function getToken(code){
    const res = await $fetch<any>("/api/auth", {
      method: "POST",
      body: { code },
    });
    if(res.access_token){
      token.value = res.access_token;
      navigateTo('/')
    }
  }

 

  return {
    toAuthPage,getToken,getUserInfo,
    token,userData
   }
},{
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['token','userData']
  },
})