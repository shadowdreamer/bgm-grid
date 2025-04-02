
export const PublicApi = {
  /**收藏条目*/ 
  getSubject: (subjectId: string) => {
    const { $ssr } = useNuxtApp();  
    return $ssr.get<any>(`/v0/subjects/${subjectId}`, {});
  }
}
