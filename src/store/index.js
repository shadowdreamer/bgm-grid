import { defineStore } from 'pinia';
import { getAccessToken } from '@/api/login'
import { getME } from '@/api/common'

export const useBaseStore = defineStore('user',{
  persist: true,
   state: () => {
    return {
      authInfo: null,
      userInfo:null,
     };
  },
  actions: {
 
    async getAuth (code) {
      try {
        const res = await getAccessToken({ code });
        if(res.access_token){
          this.authInfo = res;
        }
        window.history.replaceState(window.location.origin + window.location.pathname)
      } catch (err) {
        console.log(err);
      }
    },

    async getME(){
      try{
        const res = await getME();
        this.userInfo=res;
      }catch(err){
        console.log(err);
      }
    }
  },
});
