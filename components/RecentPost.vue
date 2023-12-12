<script setup lang="ts">
import type { IPost } from '@/mock/index.interface'

defineProps<{
  post: IPost
}>()
</script>

<template>
  <article class="rounded bg-[#fff]">
    <NuxtLink
      active-class="text-primary"
      class="text-2xl font-bold transition hover:text-primary active:text-primary"
      :to="`/${post.id}-post`"
    >
      #{{ post.id }}. {{ post.title }}
    </NuxtLink>

    <div class="my-6 flex text-lg">
      <div>{{ useDateFormat(post.date) }}</div>
      <div class="px-3">|</div>
      <div class="flex flex-wrap">
        <span v-for="(tag, idx) of post.tags" :key="idx" class="mr-2 capitalize">
          {{ tag }}
        </span>
      </div>
    </div>

    <div>
      {{ post.short_description }}
    </div>
  </article>
</template>
