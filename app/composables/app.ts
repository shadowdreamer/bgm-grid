import {  defineStore } from 'pinia'
import qs from 'qs';

export const useAppData = defineStore('app', () => {
  const token = ref("");
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
    toAuthPage,getToken,
    token
   }
},{
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['token']
  },
})