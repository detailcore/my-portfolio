<script setup>
import { greeting } from '../mock/index'
</script>

<template>
  <div
    class="flex min-h-[525px] flex-col items-center justify-between bg-[#fff] sm:flex-row-reverse"
  >
    <div class="relative flex rounded-[50%] sm:h-60 sm:w-60">
      <NuxtImg
        src="/images/avatar.png"
        alt="avatar"
        class="mb-10 h-44 max-h-[170px] w-44 max-w-[170px] rounded-[50%] sm:min-h-[243px] sm:min-w-[243px]"
      />
      <span class="absolute -left-2 top-3 -z-10 h-60 w-60 rounded-[50%] bg-[#EDF7FA]"></span>
    </div>

    <div class="mb-14 flex flex-col items-center text-center sm:mb-16 sm:block sm:text-left">
      <div class="max-w-[506px] text-5xl font-bold">
        {{ greeting.title }}
      </div>
      <div class="my-10 sm:mr-4">
        {{ greeting.short_description }}
      </div>
      <button
        class="flex h-12 w-52 items-center justify-center rounded-sm bg-primary text-xl font-medium text-gray-50 transition hover:opacity-80"
      >
        Открыть резюме
      </button>
    </div>
  </div>
</template>
