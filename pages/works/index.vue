<script setup lang="ts">
import { works } from '@/mock/index'

useHead({
  title: 'Список избранных проектов',
  meta: [
    {
      name: 'description',
      content: 'Список некоторых избранных преоктов, как учебных так и рабочих',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <h1 class="py-6 text-4xl font-bold">Избранные проекты<Dot /></h1>
    <div class="divide-y">
      <FeaturedWork v-for="item of works" :key="item.id" :work="item" class="py-12" />
    </div>
  </div>
</template>
