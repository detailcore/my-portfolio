<script setup>
import { works } from '@/mock/index'

// onMounted(() => {
//   works.sort((a, b) => new Date(b.date) - new Date(a.date))
// })
</script>

<template>
  <div>
    <div class="py-6 text-center text-2xl sm:text-left">Избранные работы</div>
    <div class="-mt-5 text-center text-light sm:text-left">
      Хронологический порядок создания проектов
    </div>

    <div class="divide-y">
      <FeaturedWork v-for="item of works" :key="item.id" :work="item" class="py-6" />
    </div>
  </div>
</template>
