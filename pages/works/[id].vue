<script setup>
import { works } from '@/mock/index'

const route = useRoute()

const work = computed(() => {
  return works.filter((i) => +i.id === +route.params.id)[0]
})
</script>

<template>
  <div class="min-h-screen">
    <h1 class="mb-4 text-2xl font-bold">{{ work.title }}</h1>
  </div>
</template>
