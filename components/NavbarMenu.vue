<script setup lang="ts">
import { navLinks as links } from '@/mock/index'
</script>

<template>
  <nav
    class="mb-8 flex h-[70px] w-full items-center justify-evenly text-xl font-medium sm:justify-end"
  >
    <NuxtLink
      v-for="({ name, link }, idx) of links"
      :key="idx"
      active-class="text-primary"
      class="mx-2 transition hover:text-primary active:text-primary sm:mx-4"
      :to="link"
    >
      {{ name }}
    </NuxtLink>
  </nav>
</template>
