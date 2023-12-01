<script setup>
import { posts } from '@/mock/index'
</script>

<template>
  <div class="min-h-screen">
    <h1 class="py-6 text-4xl font-bold">Блог</h1>
    <div class="divide-y">
      <RecentPost v-for="item of posts" :key="item.id" :post="item" />
    </div>
  </div>
</template>
