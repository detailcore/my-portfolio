<template>
  <div
    class="flex min-h-[525px] flex-col items-center justify-between bg-[#fff] sm:flex-row-reverse"
  >
    <div class="relative flex rounded-[50%] sm:h-60 sm:w-60">
      <img
        src="@/assets/images/avatar.png"
        alt="avatar"
        class="mb-10 max-h-[170px] max-w-[170px] sm:min-h-[243px] sm:min-w-[243px]"
      />
      <span class="absolute -left-2 top-3 -z-10 h-60 w-60 rounded-[50%] bg-[#EDF7FA]"></span>
    </div>

    <div class="mb-14 flex flex-col items-center text-center sm:mb-16 sm:block sm:text-left">
      <div class="max-w-[506px] text-5xl font-bold">Hi, I am John, Creative Technologist</div>
      <div class="my-10 sm:mr-4">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
      <button
        class="flex h-12 w-52 items-center justify-center rounded-sm bg-primary text-xl font-medium text-gray-50 transition hover:opacity-80"
      >
        Download Resume
      </button>
    </div>
  </div>
</template>
