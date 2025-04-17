<template lang="pug">
.relative.h-144.overflow-hidden(ref="container")
  .swiper-wrapper
    template(v-for="item in data.data")
      .relative.swiper-slide.bg-no-repeat.bg-cover.bg-center(:style="{backgroundImage:`url(${item.subject.images.large})`}")
        div.absolute.top-0.right-0.size-full.z-2.backdrop-blur.bg-whiteA10
          .container.mx-auto.pt-8.flex.gap-12
            UICoverCard(:src="item.subject.images.large")
            div.pl-10.h-96.flex.flex-col
              h2.text-5xl.font-bold.mb-2.w-192.whitespace-pre-wrap {{item.subject.name}}
              h3.text-2xl.mb-2 {{item.subject.nameCN}}
              h3.text-xl {{item.subject.info}}
              .flex-1   
              .flex
                span.font-Oswald.text-yellow-400.text-4xl.font-bold.italic {{item.subject.rating.score}}
                //- span Rank
                //- span  {{item.subject.rating.rank}}
  .absolute.right-10.top-8.z-10
    template(v-for="item in data.data")
      .bg-white.rounded.flex.gap-4.p-2.mb-2.shadow-xl
        img.w-16.h-18.object-cover(:src="item.subject.images.large")
        h2.text-xs.w-32.line-clamp-2 {{item.subject.name}} 

</template>
<script setup lang="ts">
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const { data,refresh } = useAsyncData('getTrendingSubjects',()=>getTrendingSubjects({
  type:1,
  limit:5,
  offset:0, 
}));
// const data = JSON.parse('{"data":[{"subject":{"id":307237,"name":"メダリスト","nameCN":"金牌得主","type":1,"info":"2020-09-23 / つるまいかだ / 講談社","rating":{"rank":311,"count":[0,0,0,1,1,14,50,231,277,119],"score":8.62,"total":693},"locked":false,"nsfw":false,"images":{"large":"https://lain.bgm.tv/pic/cover/l/14/fa/307237_5KNYE.jpg","common":"https://lain.bgm.tv/pic/cover/c/14/fa/307237_5KNYE.jpg","medium":"https://lain.bgm.tv/pic/cover/m/14/fa/307237_5KNYE.jpg","small":"https://lain.bgm.tv/pic/cover/s/14/fa/307237_5KNYE.jpg","grid":"https://lain.bgm.tv/pic/cover/g/14/fa/307237_5KNYE.jpg"}},"count":374},{"subject":{"id":268279,"name":"チェンソーマン","nameCN":"链锯人","type":1,"info":"2019-03-04 / 藤本タツキ / 集英社","rating":{"rank":569,"count":[3,8,9,28,76,257,1099,2521,958,391],"score":7.94,"total":5350},"locked":false,"nsfw":false,"images":{"large":"https://lain.bgm.tv/pic/cover/l/85/aa/268279_9rynK.jpg","common":"https://lain.bgm.tv/pic/cover/c/85/aa/268279_9rynK.jpg","medium":"https://lain.bgm.tv/pic/cover/m/85/aa/268279_9rynK.jpg","small":"https://lain.bgm.tv/pic/cover/s/85/aa/268279_9rynK.jpg","grid":"https://lain.bgm.tv/pic/cover/g/85/aa/268279_9rynK.jpg"}},"count":305},{"subject":{"id":377599,"name":"さよなら絵梨","nameCN":"再见绘梨","type":1,"info":"1话 / 2022-07-04 / 藤本タツキ / 集英社 / 200","rating":{"rank":407,"count":[2,2,3,20,35,151,727,1896,1137,404],"score":8.16,"total":4377},"locked":false,"nsfw":false,"images":{"large":"https://lain.bgm.tv/pic/cover/l/7a/2d/377599_5cY50.jpg","common":"https://lain.bgm.tv/pic/cover/c/7a/2d/377599_5cY50.jpg","medium":"https://lain.bgm.tv/pic/cover/m/7a/2d/377599_5cY50.jpg","small":"https://lain.bgm.tv/pic/cover/s/7a/2d/377599_5cY50.jpg","grid":"https://lain.bgm.tv/pic/cover/g/7a/2d/377599_5cY50.jpg"}},"count":248},{"subject":{"id":44996,"name":"ジョジョの奇妙な冒険 Part7『スティール・ボール・ラン』","nameCN":"JoJo的奇妙冒险 第七部 飙马野郎","type":1,"info":"95话 / 2004-05-20 / 荒木飛呂彦 / 集英社","rating":{"rank":8,"count":[5,3,2,3,6,15,92,355,782,979],"score":9.13,"total":2242},"locked":false,"nsfw":false,"images":{"large":"https://lain.bgm.tv/pic/cover/l/88/64/44996_Gg1JJ.jpg","common":"https://lain.bgm.tv/pic/cover/c/88/64/44996_Gg1JJ.jpg","medium":"https://lain.bgm.tv/pic/cover/m/88/64/44996_Gg1JJ.jpg","small":"https://lain.bgm.tv/pic/cover/s/88/64/44996_Gg1JJ.jpg","grid":"https://lain.bgm.tv/pic/cover/g/88/64/44996_Gg1JJ.jpg"}},"count":235},{"subject":{"id":343241,"name":"負けヒロインが多すぎる！","nameCN":"败犬女主太多了！","type":1,"info":"2021-07-21 / 雨森たきび / いみぎむる / 小学館","rating":{"rank":1918,"count":[9,2,3,4,21,41,242,629,227,120],"score":7.98,"total":1298},"locked":false,"nsfw":false,"images":{"large":"https://lain.bgm.tv/pic/cover/l/1c/ba/343241_TWFSN.jpg","common":"https://lain.bgm.tv/pic/cover/c/1c/ba/343241_TWFSN.jpg","medium":"https://lain.bgm.tv/pic/cover/m/1c/ba/343241_TWFSN.jpg","small":"https://lain.bgm.tv/pic/cover/s/1c/ba/343241_TWFSN.jpg","grid":"https://lain.bgm.tv/pic/cover/g/1c/ba/343241_TWFSN.jpg"}},"count":228}],"total":1000}')

const container = templateRef('container')
 onMounted(() => {
  const swiper = new Swiper(container.value, {
    modules: [ Autoplay ],
    loop: true,
    autoplay: {
      delay: 5000,
    },
 
  });
  onUnmounted(()=>{
    swiper.destroy();
  })
});
</script>
<style>

</style>