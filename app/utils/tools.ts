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

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const stepNumber = (value: number,step:number): number => {
  return (Math.round(value / step) * step *100 | 0) /100;
};

export const toggleItemInArray = <T>(array: T[], item: T): void => {
  const index = array.indexOf(item);
  if (index === -1) {
    array.push(item);
  } else {
    array.splice(index, 1);
  }
};