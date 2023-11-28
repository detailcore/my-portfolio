<template>
  <div>
    <div class="py-6 text-center text-2xl sm:text-left">Featured works</div>

    <div>
      <div v-for="item of [1, 2, 3]" :key="item">
        <FeaturedWork />
        <div class="mb-7 mt-4 h-[1px] w-full bg-[#E0E0E0]"></div>
      </div>
    </div>
  </div>
</template>
