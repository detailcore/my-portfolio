<script setup>
import { posts } from '@/mock/index'

const latest = computed(() => {
  return posts.slice(0, 2)
})
</script>

<template>
  <div class="custom-line min-h-[396px]">
    <div class="flex items-center justify-center py-6 text-2xl sm:justify-between">
      <div>Недавние публикации</div>
      <NuxtLink to="/posts" class="hidden text-base text-secondry sm:block">
        Смотреть все
      </NuxtLink>
    </div>
    <div class="-mt-5 pb-6 text-center text-light sm:text-left">
      Некторые заметки, планы и еще всякое
    </div>

    <div class="flex flex-col sm:flex-row">
      <div
        v-for="item of latest"
        :key="item.id"
        class="last:mt-0 sm:w-[50%] sm:last:ml-5 sm:last:mt-0"
      >
        <RecentPost :post="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.custom-line {
  position: relative;
}

.custom-line::before,
.custom-line::after {
  content: '';
  background-color: #edf7fa;
  position: absolute;
  height: 100%;
  width: 200%;
  z-index: -1;
}

.custom-line::before {
  top: 0;
  left: 0;
  transform: translate(25%, 0);
}

.custom-line::after {
  top: 0;
  right: 0;
  transform: translate(-25%, 0);
}
</style>
