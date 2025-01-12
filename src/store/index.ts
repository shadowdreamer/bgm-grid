import { defineStore, } from 'pinia';
import { getAccessToken } from '@/api/login'
import { getMe } from '@/api/common'
import { ref } from "vue";
import qs from "qs";

export const useBaseStore = defineStore("user",()=>{
  const authInfo = ref();
  const { data: userInfo } = getMe();
  async function getAuth (code:string) {
    try {
      const res = await getAccessToken({ code });
      if (res.access_token) {
        authInfo.value = res;
      }
      const url = new URL(window.location.href);
      url.searchParams.delete('code');
      window.history.replaceState({}, document.title, url.toString());

    } catch (err) {
      console.log(err);
    }
  }
  function toAuthPage () {
    window.location.href = `https://bgm.tv/oauth/authorize?${qs.stringify({
      client_id: 'bgm1345aaf31ef839bc',
      response_type: 'code',
      redirect_uri: encodeURI('https://bgm.dovahkiin.top')
    })}`
  }
    
  return {
    authInfo,userInfo,
    toAuthPage,getAuth
  }

},{
  persist:{
    storage:localStorage,
    pick:['authInfo'],
  }
})