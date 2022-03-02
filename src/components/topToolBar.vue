<template>
    <div class="row q-px-sm q-py-xs q-ma-none bg-grey-10 text-white q-my-none q-py-none top-toolbar">
      <div class="row content-center q-ml-lg">
        <router-link tag="li" to="/">
          <!-- <q-avatar square class="q-ml-lg "> -->
            <q-img src="~src/assets/imgs/aoi-logo.png" height="60px" width="140px"  />
          <!-- </q-avatar> -->
        </router-link>
      </div>
      <q-space />
      <q-btn stretch flat :label="$t('home')" type="a" to="/" />
      <q-btn-dropdown
        v-for="(tMenu, indexa) in topMenu"
        :key="indexa"
        stretch
        flat
        :label="$t(tMenu.title)"
      >
        <q-item
          v-for="(item, indexb) in tMenu.children"
          :key="indexb"
          clickable
          v-close-popup
          tabindex="0"
          :to="item.path"
          class="tMenu"
        >
          <q-item-section avatar v-if="item.avatar.length > 1">
            <q-avatar>
              <img :src="item.avatar" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t(item.title) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-btn-dropdown>
      <q-btn stretch flat :label="$t('tMenu_news')" type="a" to="/news" />
      
      <q-btn stretch flat type="a" :label="$t('tMenu_aboutUs')" to="/company/aboutus" />

      <!-- <q-select
        v-model="locale"
        :options="localeOptions"
        dense
        borderless
        emit-value
        map-options
        options-dense
        label-color="grey-1"
      /> -->
        <!-- style="min-width: 120px" -->
      <div class="row content-center">
        <q-select 
          v-model="locale"
          :options="localeOptions"
          map-options
          dark
          dense
          borderless
          emit-value
          class="q-ml-md"
          style="min-width: 120px;"
        ></q-select>
      </div>
        <!-- standout="bg-grey-10 text-white" -->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { menu_if } from 'src/models/models';
import { useI18n } from 'vue-i18n';

const gallery_menu = ref<menu_if[]>([
  {
    title: 'artistA',
    path: '/gallery/photo/1',
    avatar: '',
  },
  {
    title: 'artistB',
    path: '/gallery/photo/2',
    avatar: ' ',
  },
]);
const tutorial_menu = ref<menu_if[]>([
  {
    title: 'tutorial1',
    path: '',
    avatar: '',
  },
  {
    title: 'tutorial2',
    path: '',
    avatar: '',
  },
]);

const topMenu = reactive([
  {
    title: 'tMenu_gallery',
    // path: '/gallery/index',
    avatar: '',
    children: gallery_menu.value,
  },
  {
    title: 'tMenu_tutorials',
    // path: '/tutorial/index',
    avatar: '',
    children: tutorial_menu.value,
  },
]);

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '简体中文' },
  { value: 'zh-TW', label: '繁体中文' },
];

export default defineComponent({
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    return {
      locale,
      topMenu,
      localeOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.tMenu {
  background-color: $grey-7;
  color: white;
}
.top-toolbar {
  height: 100px;
}
</style>
