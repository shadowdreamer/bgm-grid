export const getMe = () => {
  const { $http } = useNuxtApp();
  return $http.get<any>(`/v0/me`, {});
}
export const getCalendar = ( ) => { 
  const { $http } = useNuxtApp();
  let res =  $http.get(`/calendar`,{});
  console.log(res);
  return res
  
}
export const getSubject = (subjectId: string) => {
  const { $http } = useNuxtApp();
  return $http.get<any>(`/v0/subjects/${subjectId}`, {});
}
export const getCollections = ( query:CollectionQuery) => { 
  const { $http } = useNuxtApp();
  const api =  `/v0/users/${'shadowdreamer' }/collections`
  return  $http.get(api,{query})
}
