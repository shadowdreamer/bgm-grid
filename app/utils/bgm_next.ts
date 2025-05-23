
export const getCalendar = ( ) => { 
  const { $ssr_next } = useNuxtApp();
  return  $ssr_next.get(`/p1/calendar`,{});  
}
export const getSubject = (subjectId: string) => {
  const { $ssr_next } = useNuxtApp();  
  return $ssr_next.get<any>(`/p1/subjects/${subjectId}`, {});
}

export const getTrendingSubjects = (query) => {
  const { $ssr_next } = useNuxtApp();
  return $ssr_next.get<any>(`/p1/trending/subjects`, {query});
};