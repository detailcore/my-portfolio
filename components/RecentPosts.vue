<template>
  <div class="custom-line min-h-[396px]">
    <div class="flex items-center justify-center py-6 text-2xl sm:justify-between">
      <div>Recent posts</div>
      <NuxtLink to="#view_all" class="hidden text-base text-secondry sm:block">View all</NuxtLink>
    </div>

    <div class="mb-10 flex flex-col sm:flex-row">
      <div v-for="item of [1, 2]" :key="item" class="last:mt-5 sm:last:ml-5 sm:last:mt-0">
        <RecentPost />
      </div>
    </div>
  </div>
</template>

<style lang="css">
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
