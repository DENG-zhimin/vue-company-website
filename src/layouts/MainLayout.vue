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

          <q-btn-dropdown
            v-for="(tMenu, indexa) in top_menu"
            :key="indexa"
            stretch
            flat
            :label="tMenu.title"
          >
            <q-item
              v-for="(item, indexb) in tMenu.children"
              :key="indexb"
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
import { menu_if } from 'components/models';
import { defineComponent, ref } from 'vue';
interface tMenu_if extends menu_if {
  children: object;
}

const prod_menu = ref<menu_if[]>([
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
]);
const gallery_menu = ref<menu_if[]>([
  {
    title: 'artistA',
    path: '',
    avatar: '',
  },
  {
    title: 'artistB',
    path: '',
    avatar: '',
  },
]);
const top_menu = ref<tMenu_if[]>([
  {
    title: 'PRODUCTS',
    path: '/products/index',
    avatar: '',
    children: prod_menu.value,
  },
  {
    title: 'GALLERY',
    path: '/gallery/index',
    avatar: '',
    children: gallery_menu.value,
  },
]);
export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {
      top_menu,
    };
  },
});
</script>
