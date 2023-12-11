<script setup lang="ts">
import { works } from '@/mock/index'
import type { IWork } from '@/mock/index.interface'

const route = useRoute()

const work = computed<IWork>(() => {
  return works.filter((i) => +i.id === +route.params.id)[0]
})

const competencies = computed<string>(() => {
  return work.value.competencies.join(', ')
})

const description = computed<string>(() => {
  return work.value.competencies_description
})

const getStack = (arr: string[]) => arr.join(', ')

useHead({
  title: work.value.title,
  meta: [
    {
      name: 'description',
      content: work.value.short_description,
    },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <h1 class="mb-4 text-2xl font-bold">{{ work.title }}</h1>

    <SubText :date="useDateFormat(work.date)" :subtitle="work.subtitle" />

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
          :src="`/images/works/${work.images.folder}/${work.cover}`"
          :img-attrs="{ class: 'w-full rounded-md' }"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
