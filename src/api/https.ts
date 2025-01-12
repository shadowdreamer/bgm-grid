import { useBaseStore } from "@/store";
import { createFetch } from "@vueuse/core";
const baseUrl = "https://api.bgm.tv"
export default  createFetch({
  baseUrl,
  options:{
    async beforeFetch({options}) {
      const { authInfo } = useBaseStore();
      options.headers['Authorization'] = `Bearer ${authInfo.access_token}`
    },
    async afterFetch(ctx) {
      return ctx
    },
  }
})