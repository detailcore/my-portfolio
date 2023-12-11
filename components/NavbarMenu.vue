<script setup lang="ts">
import { navLinks as links } from '@/mock/index'
</script>

<template>
  <nav class="mb-8 flex h-[70px] items-center text-xl font-medium">
    <NavbarLinks :links="links" />
  </nav>
</template>
