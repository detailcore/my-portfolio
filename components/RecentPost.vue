<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="mb-10 rounded bg-[#fff] p-6">
    <NuxtLink
      active-class="text-primary"
      class="text-2xl font-bold transition hover:text-primary active:text-primary"
      :to="`/posts/${post.id}`"
    >
      #{{ post.id }}. {{ post.title }}
    </NuxtLink>

    <div class="my-6 flex text-lg">
      <div>{{ useDateFormat(post.date) }}</div>
      <div class="px-3">|</div>
      <div class="flex">
        <span v-for="(tag, idx) of post.tags" :key="idx" class="mr-2 capitalize">
          {{ tag }}
        </span>
      </div>
    </div>

    <div>
      {{ post.short_description }}
    </div>
  </div>
</template>
