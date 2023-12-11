<script setup lang="ts">
import { posts } from '@/mock/index'
import type { IPost } from '@/mock/index.interface'

const route = useRoute()

const post = computed<IPost>(() => {
  return posts.filter((i) => +i.id === +route.params.id)[0]
})

useHead({
  title: post.value.title,
  meta: [
    {
      name: 'description',
      content: post.value.short_description,
    },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <h1 class="mb-4 text-2xl font-bold">{{ post.title }}</h1>

    <div class="my-6 text-lg">
      <span>{{ useDateFormat(post.date) }}</span>
      <span class="px-3">|</span>
      <span v-for="(tag, idx) of post.tags" :key="idx" class="mr-2 capitalize">
        {{ tag }}
      </span>
    </div>

    <div class="indent-4">
      {{ post.description }}
    </div>
  </div>
</template>
