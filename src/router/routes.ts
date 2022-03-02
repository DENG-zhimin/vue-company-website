import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'news', component: () => import('pages/news/Index.vue') },
      {
        path: 'product',
        component: () => import('layouts/Layout.vue'),
        children: [
          {
            path: ':id',
            component: () => import('pages/product/Product.vue'),
            props: true,
            name: 'prodInfo',
          },
          {
            path: 'cate/:cate',
            component: () => import('pages/product/Index.vue'),
            props: true,
            name: 'prodCate',
          },
        ],
      },
      {
        path: 'company',
        component: () => import('layouts/Layout.vue'),
        children: [
          {
            path: 'aboutus',
            component: () => import('pages/company/AboutUs.vue'),
          },
        ],
      },
      {
        path: 'gallery',
        component: () => import('layouts/Layout.vue'),
        children: [
          {
            path: 'photo/:id',
            component: () => import('pages/gallery/Photo.vue'),
            props: true,
          },
        ],
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
