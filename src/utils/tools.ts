export const byteLenth = function (str:string){
  return Array.from(str).reduce((pre,cur)=>{
    if(cur.charCodeAt(0)>255){
      return pre+=2
    }else{
      return pre++
    }
  },0)
}