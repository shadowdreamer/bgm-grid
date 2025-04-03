
export const PublicApi = {
  /**条目*/ 
  getSubject: (subjectId: string) => {
    const { $ssr } = useNuxtApp();  
    return $ssr.get<any>(`/v0/subjects/${subjectId}`, {});
  },
  /**获取用户收藏*/ 
  getUserCollections: (query:CollectionQuery) => {
    const { $ssr } = useNuxtApp();
    const {userData} = useAppData()
    return $ssr.get<any>(`/v0/users/${userData.username}/collections`, {query});
  },
  /**获取条目剧集进度*/
  getSubjectEpisodes: (subjectId: string,query={}) => {
    const { $http } = useNuxtApp();
    return $http.get<any>(`/v0/users/-/collections/${subjectId}/episodes`, {query});
  },
  
}
