export const getMe = () => {
  const { $http } = useNuxtApp();
  return $http.get<any>(`/v0/me`, {});
}

export const getCollections = ( query:CollectionQuery) => { 
  const { $http } = useNuxtApp();
  const api =  `/v0/users/${'shadowdreamer' }/collections`
  return  $http.get(api,{query})
}