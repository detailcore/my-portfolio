<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex w-full items-center justify-evenly sm:justify-end">
    <NuxtLink
      v-for="({ name, link }, idx) of links"
      :key="idx"
      active-class="text-primary"
      class="mx-2 transition hover:text-primary active:text-primary sm:mx-4"
      :to="link"
    >
      {{ name }}
    </NuxtLink>
  </div>
</template>
