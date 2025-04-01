export const getMe = () => {
  const { $http } = useNuxtApp();
  return $http.get<any>(`/v0/me`, {});
}
export const getCalendar = ( ) => { 
  const { $ssr } = useNuxtApp();
  return  $ssr.get(`/calendar`,{});  
}
export const getSubject = (subjectId: string) => {
  const { $ssr } = useNuxtApp();  
  return $ssr.get<any>(`/v0/subjects/${subjectId}`, {});
}
export const getCollections = ( query:CollectionQuery) => { 
  const { $http } = useNuxtApp();
  const api =  `/v0/users/${'shadowdreamer' }/collections`
  return  $http.get(api,{query})
}
