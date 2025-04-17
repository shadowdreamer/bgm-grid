<template lang="pug">
.card(:style="{backgroundImage:`url(${src})`}" ref="card")
  .glow(ref="glow")
</template>
<script setup lang="ts">
// see https://codepen.io/markmiro/pen/wbqMPa
defineProps<{
  src:string
}>();
const cardRef = useTemplateRef('card')
const glowRef = useTemplateRef('glow')
onMounted(()=>{
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;

    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    const angle = Math.log(distance) * 2;

    // 卡片旋转 + 缩放
    gsap.to(cardRef.value, {
      scale: 1.01,
      rotateX: center.y / 50,
      rotateY: -center.x / 50,
      transformPerspective: 1000,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.4
    });

    // 发光位置移动
    const glowX = center.x * 2 + bounds.width / 2;
    const glowY = center.y * 2 + bounds.height / 2;

    gsap.to(glowRef.value, {
      backgroundImage: `
        radial-gradient(
          circle at ${glowX}px ${glowY}px,
          #ffffff55,
          #0000000f
        )
      `,
      opacity:1,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  // 鼠标进入
  cardRef.value?.addEventListener('mouseenter', () => {
    bounds = cardRef.value?.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  // 鼠标离开
  cardRef.value?.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    
    gsap.to(cardRef.value, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out"
    });

    gsap.to(glowRef.value, {
      opacity:0,
      duration: 0.6,
      ease: "power3.out"
    });
  });
})
</script>
<style scoped>
.card {
  @apply shadow;
  
  width:  300px;
  height: 400px;
  
  border-radius: 10px;
  background-size: cover;
  position: relative;
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
}

.card:hover {
  @apply shadow-2xl;
  transition-duration: 150ms;
}
.card .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
}
</style>