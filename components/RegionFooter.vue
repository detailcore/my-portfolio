<script setup lang="ts">
const route = useRoute()

const year = computed<number>(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="mt-12 flex h-44 w-full flex-col items-center justify-center">
    <FeedBack />

    <div v-show="route.name !== 'contact'" class="flex flex-col items-center">
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
    </div>
  </footer>
</template>
