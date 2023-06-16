import { createRouter, createWebHistory } from 'vue-router'

import { HomeView } from '@/views';
import { useAuthStore } from '@/stores';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: () => import('../views/TaskListView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/task/:taskId',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/signout',
      name: 'signout',
      component: () => import('../views/SignOutView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      props: route => ({ query: route.query.q }),
    },
    {
      path: '/list/:listType',
      name: 'dynamiclist',
      component: () => import('../views/DynamicListView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});

// https://medium.com/js-dojo/how-to-dynamically-change-the-page-title-with-vue-and-vue-router-99904906ce45

export default router
