<script setup lang="ts">
import { works } from '@/mock/index'

const latest = computed(() => {
  return works.slice(0, 3)
})
</script>

<template>
  <div>
    <div class="flex items-center justify-center py-6 text-2xl sm:justify-between">
      <div>Избранные работы<Dot /></div>
      <NuxtLink to="/works" class="hidden text-base text-secondry hover:text-primary sm:block">
        Смотреть все работы
      </NuxtLink>
    </div>
    <div class="-mt-5 text-center text-light sm:text-left">
      Хронологический порядок создания проектов
    </div>

    <div class="divide-y">
      <FeaturedWork v-for="item of latest" :key="item.id" :work="item" class="py-6" />
    </div>

    <div class="mb-5 mt-5 flex w-full justify-center sm:hidden">
      <NuxtLink to="/works" class="text-lg text-secondry hover:text-primary">
        Смотреть все проекты
      </NuxtLink>
    </div>
  </div>
</template>
