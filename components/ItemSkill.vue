<script setup lang="ts">
import type { ISkills } from '@/mock/index.interface'

type TKeys = keyof ISkills

defineProps<{
  name: TKeys
  skill: string
}>()

const getName = (name: TKeys) => {
  switch (name) {
    case 'frontend':
      return 'Frontend'

    case 'backend':
      return 'Backend'

    case 'ui_ux':
      return 'UI/UX'

    case 'lib':
      return 'Библиотеки (основные)'

    case 'add':
      return 'Дополнительно'
  }
}
</script>

<template>
  <div class="py-4">
    <div class="text-xl font-medium">{{ getName(name) }}</div>
    <div class="opacity-80">{{ skill }}</div>
  </div>
</template>
