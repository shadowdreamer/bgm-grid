const baseUrl = "/api/next"

type get = <T>(url: string, options: { query?: Record<string, any>, headers? :HeadersInit}) => Promise<T>
type post = <T>(url: string, options: { query?: Record<string, any>, data?: any,headers?:HeadersInit}) => Promise<T>
type del = <T>(url: string, options: { query?: Record<string, any>, data?: any,headers?:HeadersInit}) => Promise<T>
type put = <T>(url: string, options: { query?: Record<string, any>, data?: any,headers?:HeadersInit}) => Promise<T>

declare module '#app' {
  interface NuxtApp {
    $ssr_next: {
      get: get,
      post: post,
      del: del,
      put: put,
    };
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = $fetch.create({
    baseURL: baseUrl,
    retry: 0,
    async onRequest({ request, options }) {

    },

    async onResponseError({ request, response, options }) {
      
    },
  });


  const get: get = async (url, { query ,headers } = {}) => apiClient(url, {
    method: 'GET',
    query,
    headers
  });
  const post: post = async (url, { data, query,headers  } = {}) => {
    return apiClient(url, {
      method: 'POST',
      query,
      body: data,
      headers,
    });
  }
  const put: post = async (url, { data, query,headers  } = {}) => {
    return apiClient(url, {
      method: 'PUT',
      query,
      body: data,
      headers
    });
  }
  const del: post = async (url, { data, query,headers  } = {}) => {
    return apiClient(url, {
      method: 'DELETE',
      query,
      body: data,
      headers
    });
  }

  nuxtApp.provide('ssr_next', {
    apiClient,
    post,
    get,
    del,
    put
  });
})

