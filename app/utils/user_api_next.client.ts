export const collectionSubjects = ( query:CollectionQuery) => { 
  const { $http_next } = useNuxtApp();
  return  $http_next.get<{data:any[],total:number}>(`/p1/collections/subjects`,{query})
}
export const loginNext = ( data) => { 
  const { $http_next } = useNuxtApp();
  return  $http_next.post<{data:any[],total:number}>(`/p1/login`,{data})
}
