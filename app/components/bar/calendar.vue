<template lang="pug">
TabsRoot.calender-tab( v-model="tabValue" v-if="data")
  TabsList(class='tab-list')
    TabsTrigger(class="tab-trigger" v-for='day in weeks' :key="day.value" :value="day?.value") {{day.text}}
    TabsIndicator(class='tabs-indicator') 
  TabsContent(v-for="day in weeks" :value="day.value")
    NuxtLink.flex.gap-2.mb-1(v-for="data in data[day.value]" :to="`/subject/${data.subject.id}`")
      img.size-16(:src="data.subject?.images?.grid")
      .w-72.line-clamp-2.text-sm.break-all.py-1 {{ data.subject?.nameCN || data.subject?.name }}
</template>
<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
const { data,refresh } = useAsyncData('getCalendarNext',()=>nextSsrApi.getCalendar());
const tabValue = ref(1)
 
</script>

<style>
.calender-tab{
  .tab-list{
    @apply text-sm flex items-center gap-4 relative mb-4;
  }
  .tab-trigger{
    @apply text-neutral-600 data-[state='active']:font-bold data-[state='active']:text-gray333  z-10 transition-colors;
  }
  .tabs-indicator{
    @apply z-0 absolute rounded-full h-[4px]  w-[calc(var(--radix-tabs-indicator-size))] 
    translate-y-4
    translate-x-[calc(var(--radix-tabs-indicator-position))] transition-[width,transform] duration-300 bg-primary;
  }
}
</style>