<template>
  <div class="overflow-hidden font-heebo">
    <RegionHeader />

    <div class="m-auto flex w-full flex-col px-5 sm:px-2 md:px-3 lg:max-w-[856px]">
      <slot />
    </div>

    <RegionFooter />
  </div>
</template>
