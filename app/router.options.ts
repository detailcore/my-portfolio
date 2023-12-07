import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'index',
      path: '/',
      component: () => import('~/pages/index.vue').then((r) => r.default || r),
    },

    // Посты блога
    {
      name: 'postsIndex',
      path: '/posts',
      component: () => import('~/pages/posts/index.vue').then((r) => r.default || r),
    },
    {
      name: 'post',
      path: '/:id-post',
      component: () => import('~/pages/posts/[id].vue').then((r) => r.default || r),
    },

    // Избранные работы
    {
      name: 'worksIndex',
      path: '/works',
      component: () => import('~/pages/works/index.vue').then((r) => r.default || r),
    },
    {
      name: 'work',
      path: '/:id-work',
      component: () => import('~/pages/works/[id].vue').then((r) => r.default || r),
    },
  ],
}
