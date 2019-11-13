import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        // if (isAuthenticated) return next('/dashboard');
        return next();
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./components/Account/Dashboard.vue'),
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated === "true") return next();
        return next('/');
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./components/Account/Settings.vue'),
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated === "true") return next();
        return next('/');
      }
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('./components/Account/Gallery.vue'),
      meta: { 
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated === "true") return next();
        return next({
          path: '/'
        });
      }
    }
  ]
});