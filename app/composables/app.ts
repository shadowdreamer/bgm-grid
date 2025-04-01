import {  defineStore } from 'pinia'

export const useAppData = defineStore('app', () => {
  const token = ref("")
  return {
    token
   }
},{
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['token']
  },
})