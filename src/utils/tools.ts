export const byteLenth = function (str:string){
  if(!str)return 0;
  return Array.from(str).reduce((pre,cur)=>{
    if(cur && cur.charCodeAt(0)>255){
      return pre+=2
    }else{
      return pre++
    }
  },0)
}