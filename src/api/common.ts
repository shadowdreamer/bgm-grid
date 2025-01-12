import qs from 'qs';
import $fetch from './https';
import { computed, Ref, ref } from "vue";

export const  getMe = ()=> $fetch('/v0/me').json();
// export const getME = genGet('/v0/me')

interface CollectionQuery {
  /**
  `1`: 想看
  `2`: 看过
  `3`: 在看
  `4`: 搁置
  `5`: 抛弃
  */
  type: 1 | 2 | 3 | 4 | 5
  /**
  `1` 为 书籍
  `2` 为 动画
  `3` 为 音乐
  `4` 为 游戏
  `6` 为 三次元
  */
  subject_type: 1 | 2 | 3 | 4 | 6
}
// export const getCollections = function(username:string, query:CollectionQuery|null=null){
//   let queryString = "";
//   if(query){
//     queryString = `?${qs.stringify(query)}`
//   }
//   return genGet(`/v0/users/${username}/collections`+ queryString)
// }

export const getCollections = (userInfo: Ref<any>, query: Ref<CollectionQuery>) => { 
  const api = computed(() => `/v0/users/${userInfo.value.username}/collections?${qs.stringify(query.value)}`)
  return $fetch(api).json()
}
export const getCollectionsEpospdes = (userInfo: Ref<any>,subject_id :string,query: Ref<any>) => { 
  const api = computed(() => `/v0/users/-/collections/${subject_id}/episodes?${qs.stringify(query.value)}`)
  return $fetch(api).json()
}
export const getSubject = (subject_id:string) => { 
  const api = computed(() => `/v0/subjects/${subject_id}`)
  return $fetch(api).json()
}
export const updateEpisode = (episode_id:string,type:number) => { 
  const api = computed(() => `/v0/users/-/collections/-/episodes/${episode_id}`)
  return $fetch (api).put({type}).json()
}