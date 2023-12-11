<script setup lang="ts">
import { works } from '@/mock/index'

const all = computed(() => works)
</script>

<template>
  <div>
    <div class="py-6 text-center text-2xl sm:text-left">Избранные работы</div>
    <div class="-mt-5 text-center text-light sm:text-left">
      Хронологический порядок создания проектов
    </div>

    <div class="divide-y">
      <FeaturedWork v-for="item of all" :key="item.id" :work="item" class="py-6" />
    </div>
  </div>
</template>
