<template>
  <div class="column justify-end">
    <q-toolbar class="row justify-end bg-primary text-white">
      <q-avatar>
        <img src="~src/assets/imgs/aoi-logo-xs.png" />
      </q-avatar>
      <q-separator dark vertical inset class="q-mx-md" />
      <q-btn flat class="text-white" :label="$t('tMenu_home')" type="a" to="/" />
      <q-space />
      <q-btn-dropdown
        v-for="(tMenu, indexa) in topMenu"
        :key="indexa"
        stretch
        flat
        :label="$t(tMenu.title)"
        class="text-subtitle1 text-bold"
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
          <!-- <router-link > -->
          <q-item-section avatar v-if="item.avatar.length > 1">
            <q-avatar>
              <img :src="item.avatar" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t(item.title) }}</q-item-label>
          </q-item-section>
          <!-- </router-link> -->
        </q-item>
      </q-btn-dropdown>

      <q-space></q-space>
      <router-link to="/">
        <q-btn flat class="text-white" icon="shopping_cart"></q-btn>
      </router-link>
      <router-link to="/">
        <q-btn flat class="text-white" icon="search"></q-btn>
      </router-link>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { menu_if } from 'src/models/models';
import { useI18n } from 'vue-i18n';

const m_housing = ref<menu_if[]>([
  {
    title: 'Housing 1',
    path: '/products/camera_housing/index',
    avatar: '',
  },
  {
    title: 'Housing 2',
    path: '/',
    avatar: ' ',
  },
]);
const m_lens = ref<menu_if[]>([
  {
    title: 'Lens1',
    path: '',
    avatar: '',
  },
  {
    title: 'Lens2',
    path: '',
    avatar: '',
  },
]);
const m_strobes = ref<menu_if[]>([
  {
    title: 'Strobe A',
    path: '',
    avatar: '',
  },
  {
    title: 'Strobe B',
    path: '',
    avatar: '',
  },
]);
const m_flashlight = ref<menu_if[]>([
  {
    title: 'Flashlight',
    path: '',
    avatar: '',
  },
  {
    title: 'Flashlight',
    path: '',
    avatar: '',
  },
]);
const m_accessories = ref<menu_if[]>([
  {
    title: 'm_accessories',
    path: '',
    avatar: '',
  },
  {
    title: 'm_accessories',
    path: '',
    avatar: '',
  },
]);

const topMenu = reactive([
  {
    title: 'm_housing',
    path: '/gallery/index',
    avatar: '',
    children: m_housing.value,
  },
  {
    title: 'm_lens',
    path: '/tutorial/index',
    avatar: '',
    children: m_lens.value,
  },
  {
    title: 'm_strobes',
    path: '/strobe/index',
    avatar: '',
    children: m_strobes.value,
  },
  {
    title: 'm_flashlight',
    path: '/tutorial/index',
    avatar: '',
    children: m_flashlight.value,
  },
  {
    title: 'm_accessories',
    path: '/accessories/index',
    avatar: '',
    children: m_accessories.value,
  },
]);

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'chs', label: '简体中文' },
  { value: 'cht', label: '繁体中文' },
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
  background-color: #1976d2;
  color: white;
}
</style>
