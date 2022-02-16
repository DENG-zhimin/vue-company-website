<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="q-pa-xs">
        <q-toolbar class="bg-primary text-white q-my-sm shadow-2">
          <q-avatar>
            <img src="~src/assets/imgs/aoi-logo-xs.png" />
          </q-avatar>
          <q-separator dark vertical inset class="q-mx-md" />
          <q-btn stretch flat label="HOME" />

          <q-space />

          <q-btn-dropdown stretch flat :label="prod_menu.title">
            <q-item
              v-for="item in prod_menu.children"
              :key="item.title"
              clickable
              v-close-popup
              tabindex="0"
              :to="item.path"
            >
              <!-- <router-link > -->
              <q-item-section avatar v-if="item.avatar.length > 1">
                <q-avatar>
                  <img :src="item.avatar" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.title }}</q-item-label>
              </q-item-section>
              <!-- </router-link> -->
            </q-item>
          </q-btn-dropdown>
          <q-separator dark vertical />
          <q-btn stretch flat label="NEWS" />
          <q-separator dark vertical />
          <q-btn stretch flat label="ABOUT US" />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/* interface menu_if  {
  title: string;
  path: string;
  avatar: string;
} */
const prod_menu = {
  title: 'PRODUCTS',
  path: '/products/index',
  avatar: '',
  children: [
    {
      title: 'CAMERA HOUSING',
      path: '/products/camera_housing/index',
      avatar: '',
    },
    {
      title: 'CAMERA LENSES',
      path: '/products/camera_lens/index',
      avatar: '',
    },
    {
      title: 'STROBE',
      path: '/products/strobe/index',
      avatar: '',
    },
    {
      title: 'FLASH LIGHT',
      path: '/products/flash_light/index',
      avatar: '',
    },
    {
      title: 'ACCESSORIES',
      path: '/products/accessories/index',
      avatar: '',
    },
  ],
};
export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {
      prod_menu,
    };
  },
});
</script>
