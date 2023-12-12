<script setup lang="ts">
import type { IWork } from '@/mock/index.interface'

defineProps<{
  work: IWork
}>()
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <NuxtPicture
      v-if="work.images.files.length > 0"
      class="flex sm:shrink-0"
      :src="`/images/works/${work.images.folder}/${work.cover}`"
      :img-attrs="{ class: 'w-full rounded-md sm:mr-5 sm:h-[180px] sm:w-[246px]' }"
      loading="lazy"
    />
    <IconsNoImage v-else class="max-w-[260px]" />

    <div class="mt-4 flex flex-col justify-evenly sm:mt-0">
      <NuxtLink
        active-class="text-primary"
        class="text-3xl font-bold transition hover:text-primary active:text-primary"
        :to="`/${work.id}-work`"
      >
        #{{ work.id }}. {{ work.title }} <span v-if="work.links[0] === ''">(private)</span>
      </NuxtLink>

      <SubText :date="useDateFormat(work.date, true)" :subtitle="work.subtitle" />

      <div class="whitespace-break-spaces">
        {{ work.short_description }}
      </div>
    </div>
  </div>
</template>
