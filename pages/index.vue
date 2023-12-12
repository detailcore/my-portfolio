<script setup lang="ts">
useHead({
  title: 'Портфолио - Frontend Vue.js разработчик',
  meta: [
    {
      name: 'description',
      content:
        'Личный сайт-резюме фронтенд Vue.js разработчика. Это своего рода портфолио со ссылками на некоторые проекты и исходный код этих проектов на гитхабе, а так же контактные данные для обратной связи.',
    },
  ],
})
</script>

<template>
  <div>
    <GreetDisplay />

    <Skills />

    <RecentPosts />

    <FeaturedWorks />
  </div>
</template>
