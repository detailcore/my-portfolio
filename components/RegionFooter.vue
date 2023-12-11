<script setup lang="ts">
const year = computed<number>(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="mt-12 flex h-44 w-full flex-col items-center justify-center">
    <div class="mb-7 flex h-[30px] w-full justify-center">
      <NuxtLink
        target="_blank"
        to="https://t.me/detailcore"
        class="mr-9 hover:text-primary focus:text-primary"
      >
        <IconsTelegram class="h-10 w-10 max-w-[35px]" />
      </NuxtLink>

      <NuxtLink
        target="_blank"
        to="https://github.com/detailcore"
        class="hover:text-primary focus:text-primary"
      >
        <IconsGithub class="h-10 w-10" />
      </NuxtLink>
    </div>

    <div>Copyright ©{{ year }} All rights reserved.</div>
    <div class="mt-2 flex text-sm">
      Figma template (<NuxtLink
        target="_blank"
        to="https://www.figma.com/file/SLHsCYqjbiMLZ18sYcuM3B"
        class="hover:text-primary focus:text-primary"
      >
        link </NuxtLink
      >)
    </div>
  </footer>
</template>
