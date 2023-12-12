<script setup lang="ts">
import { posts } from '@/mock/index'

useHead({
  title: 'Список публикация',
  meta: [
    {
      name: 'description',
      content:
        'Список публикаций, в которых я рассказываю о своих планах на будущее, ставлю цели и делаю выводы по сделанным задачам. В общем своего рода обычный журнал событий.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <h1 class="py-6 text-4xl font-bold">Блог<Dot /></h1>
    <div class="divide-y">
      <RecentPost v-for="item of posts" :key="item.id" :post="item" class="py-6" />
    </div>
  </div>
</template>
