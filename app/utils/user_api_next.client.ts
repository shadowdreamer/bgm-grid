export const collectionSubjects = ( query:CollectionQuery) => { 
  const { $http_next } = useNuxtApp();
  return  $http_next.get<{data:any[],total:number}>(`/p1/collections/subjects`,{query})
}
