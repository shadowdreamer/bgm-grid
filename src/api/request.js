import { useBaseStore } from '@/store'
const baseUrl = "https://api.bgm.tv"
export function request (api, config) {

  return async function (data) {
    const { authInfo } = useBaseStore();
    const resp = await fetch(baseUrl + api, {
      ...config,
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authInfo.access_token}`
      },
      body: JSON.stringify(data)
    });
    return await resp.json()
  }
}

export const genPost = api => request(api, { method: 'post' })
export const genGet = api => request(api)