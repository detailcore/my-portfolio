<script setup>
import { works } from '@/mock/index'
</script>

<template>
  <div class="min-h-screen">
    <h1 class="py-6 text-4xl font-bold">Избранные проекты</h1>
    <div class="divide-y">
      <FeaturedWork v-for="item of works" :key="item.id" :work="item" class="py-6" />
    </div>
  </div>
</template>
