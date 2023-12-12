<script setup lang="ts">
import { skills } from '@/mock/index'
</script>

<template>
  <section class="mb-12 flex flex-row flex-wrap text-[#252525] sm:flex-nowrap sm:divide-x">
    <div class="flex flex-row flex-wrap content-start items-start py-4 sm:max-w-[200px] sm:pr-4">
      <div class="text-2xl font-bold">Skills<Dot /></div>
      <div class="opacity-80">
        Меня вдохновляет создание великолепных работ с людьми, которые так же, как и я, увлечены
        созданием чего-то потрясающего.
      </div>
    </div>

    <div class="flex flex-row flex-wrap sm:divide-y sm:pl-4">
      <ItemSkill v-for="(item, name) in skills" :key="name" :name="name" :skill="item" />
    </div>
  </section>
</template>
