import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'products/camera_housing/index',
        component: () => import('pages/products/camera_housing.vue'),
      },
      {
        path: 'company',
        component: () => import('layouts/Layout.vue'),
        children: [
          { path: 'aboutus', component: () => import('pages/company/AboutUs.vue') },
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
