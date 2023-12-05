<script setup>
const { work } = defineProps({
  work: {
    type: Object,
    required: true,
  },
})

const year = computed(() => new Date(work.date).getFullYear())
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <NuxtPicture
      class="flex sm:shrink-0"
      :src="`/images/works/${work.images.folder}/${work.cover}`"
      :img-attrs="{ class: 'w-full rounded-md sm:mr-5 sm:h-[180px] sm:w-[246px]' }"
      loading="lazy"
    />
    <div class="mt-4 flex flex-col justify-between sm:mt-0">
      <NuxtLink
        active-class="text-primary"
        class="text-3xl font-bold transition hover:text-primary active:text-primary"
        :to="`/works/${work.id}`"
      >
        #{{ work.id }}. {{ work.title }} <span v-if="work.links[0] === ''">(private)</span>
      </NuxtLink>
      <div class="mb-6 mt-4 flex flex-row items-center sm:mb-0 sm:mt-0">
        <div class="mr-6 rounded-2xl bg-[#142850] px-2 text-lg font-black text-gray-50">
          {{ year }}
        </div>
        <div class="text-xl text-light">{{ work.subtitle }}</div>
      </div>
      <div class="whitespace-break-spaces">
        {{ work.short_description }}
      </div>
    </div>
  </div>
</template>
