<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div>
        <top-tool-bar/>
        <prod-tool-bar></prod-tool-bar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import TopToolBar from 'src/components/topToolBar.vue';
import prodToolBar from 'src/components/prodToolBar.vue';
import { menu_if } from 'src/models/models';
import { defineComponent, ref, reactive } from 'vue';
// import { useI18n } from 'src/boot/i18n';
import { useI18n } from 'vue-i18n';

// const { t } = useI18n();
// interface tMenu_if extends menu_if {
//   children: object;
// }

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
    title: 'tMenu_products',
    path: '/products/index',
    avatar: '',
    children: prod_menu.value,
  },
  {
    title: 'tMenu_gallery',
    path: '/gallery/index',
    avatar: '',
    children: gallery_menu.value,
  },
  {
    title:'tMenu_tutorials',
    path: '/tutorial/index',
    avatar: '',
    children: tutorial_menu.value,
  },
]);

const localeOptions = [
  { value: 'chs', label: '简体中文' },
  { value: 'cht', label: '繁体中文' },
  { value: 'en-US', label: 'English' },
];

// const { locale } = useI18n({ useScope: 'global' });
export default defineComponent({
  name: 'MainLayout',
  components: {TopToolBar, prodToolBar},
  data() {
    return {
      
    };
  },

  setup() {
    // const { t } = useI18n();

    const { locale } = useI18n({ useScope: 'global' });

    // const lang = ref(locale)

    return {
      topMenu,
      locale,
      localeOptions,
    };
  },
  methods: {
    
  },
  created() {
    // console.log(this.menuaa);
  },
});
</script>

<style lang="scss" scoped>

</style>
