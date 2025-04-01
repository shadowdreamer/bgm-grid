
export const getCalendar = ( ) => { 
  const { $ssr } = useNuxtApp();
  return  $ssr.get(`/calendar`,{});  
}
export const getSubject = (subjectId: string) => {
  const { $ssr } = useNuxtApp();  
  return $ssr.get<any>(`/v0/subjects/${subjectId}`, {});
}
