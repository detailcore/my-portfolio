<script setup lang="ts">
defineProps<{
  date: string | number
  subtitle: string
}>()
</script>

<template>
  <div class="mb-6 mt-4 flex flex-row items-center sm:mb-0 sm:mt-0">
    <div class="mr-6 rounded-2xl bg-[#142850] px-2 text-lg font-black text-gray-50">
      {{ date }}
    </div>
    <div class="text-xl text-light">{{ subtitle }}</div>
  </div>
</template>
