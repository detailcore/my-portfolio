<template>
  <div class="flex flex-col sm:flex-row">
    <NuxtPicture
      class="flex sm:shrink-0"
      src="/work_1.png"
      :img-attrs="{ class: 'w-full rounded-md sm:mr-5 sm:h-[180px] sm:w-[246px]' }"
      loading="lazy"
    />
    <div class="mt-4 flex flex-col justify-between sm:mt-0">
      <NuxtLink
        active-class="text-primary"
        class="text-3xl font-bold transition hover:text-primary active:text-primary"
        to="/post"
      >
        Designing Dashboards
      </NuxtLink>
      <div class="mb-6 mt-4 flex flex-row items-center sm:mb-0 sm:mt-0">
        <div class="mr-6 rounded-2xl bg-[#142850] px-2 text-lg font-black text-gray-50">2020</div>
        <div class="text-xl text-light">Dashboard</div>
      </div>
      <div class="whitespace-break-spaces">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
    </div>
  </div>
</template>
