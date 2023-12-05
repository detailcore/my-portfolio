<script setup>
import { works } from '@/mock/index'

const route = useRoute()

const work = computed(() => {
  return works.filter((i) => +i.id === +route.params.id)[0]
})

const competencies = computed(() => {
  return work.value.competencies.join(', ')
})

const description = computed(() => {
  return work.value.competencies_description
})

const getStack = (arr) => arr.join(', ')
</script>

<template>
  <div class="min-h-screen">
    <h1 class="mb-4 text-2xl font-bold">{{ work.title }}</h1>

    <div class="mb-6 mt-4 flex flex-row items-center sm:mb-0 sm:mt-0">
      <div class="mr-6 rounded-2xl bg-[#142850] px-2 text-lg font-black text-gray-50">
        {{ useDateFormat(work.date) }}
      </div>
      <div class="text-xl text-light">{{ work.subtitle }}</div>
    </div>

    <div class="py-6 indent-4">
      <div>
        <b>Вступление:</b> <span>{{ work.short_description }}</span>
      </div>

      <div class="mt-6">
        <b>Стек:</b>
        <span v-if="work.stack.frontend.length">
          <br />
          <u class="">Front-end</u>: {{ getStack(work.stack.frontend) }}
        </span>
        <span v-if="work.stack.backend.length">
          <br />
          <u>Back-end</u>: {{ getStack(work.stack.backend) }}
        </span>
        <span v-if="work.stack.add.length">
          <br />
          <u>Add</u>: {{ getStack(work.stack.add) }}
        </span>
      </div>

      <div class="mt-6">
        <p>
          <b>Мои компетенции:</b> <span>{{ competencies }}</span>
        </p>
        <p>
          <b>Описание компетенций:</b> <span>{{ description }}</span>
        </p>
      </div>

      <div v-if="1" class="mt-6">
        <p>
          <b class="mr-2">Ссылка на github:</b>
          <NuxtLink
            v-if="work.links[0] !== ''"
            target="_blank"
            :to="work.links[0]"
            class="hover:text-primary focus:text-primary"
          >
            {{ work.links[0] }}
          </NuxtLink>
          <span v-else>privet or local</span>
        </p>
        <p>
          <b class="mr-2">Ссылка на проект:</b>
          <NuxtLink
            v-if="work.links[1] !== ''"
            target="_blank"
            :to="work.links[1]"
            class="hover:text-primary focus:text-primary"
          >
            {{ work.links[1] }}
          </NuxtLink>
          <span v-else>privet or local</span>
        </p>
      </div>
      <div v-else class="mt-6"></div>

      <div class="mt-6">
        <p>
          <b>Скриншот проекта:</b>
        </p>
        <NuxtPicture
          class="flex"
          :src="`/works/${work.images.folder}/${work.cover}`"
          :img-attrs="{ class: 'w-full rounded-md' }"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
