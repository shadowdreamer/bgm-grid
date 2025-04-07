export const getMe = () => {
  const { $http } = useNuxtApp();
  return $http.get<any>(`/v0/me`, {});
}

export const getCollections = ( query:CollectionQuery) => { 
  const { $http } = useNuxtApp();
  const api =  `/v0/users/${'shadowdreamer' }/collections`
  return  $http.get(api,{query})
}
export const putEpisodeDetails = (episodeId: string,type:any) => {
  const { $http } = useNuxtApp();
  const api = `/v0/users/-/collections/-/episodes/${episodeId}`;
  return $http.put<any>(api, {data: {type}  });
};
export const patchEpisodesAsWatch = (subject_id:string,episode_id: string[]) => {
  const { $http } = useNuxtApp();
  const api = `/v0/users/-/collections/${subject_id}/episodes`;
  return $http.patch<any>(api, {data: {type:2,episode_id}  });
};