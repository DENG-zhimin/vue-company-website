<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div>
        <q-toolbar class="row justify-end bg-primary text-white">
          <q-avatar>
            <img src="~src/assets/imgs/aoi-logo-xs.png" />
          </q-avatar>
          <q-separator dark vertical inset class="q-mx-md" />
          <router-link to="/">
            <q-btn flat class="text-white">{{$t('tMenu_home')}}</q-btn>
          </router-link>
          <q-space />
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
          <q-separator dark vertical />
          <q-btn stretch flat :label="$t('tMenu_news')" />
          <q-separator dark vertical />
          <q-btn stretch flat :label="$t('tMenu_aboutUs')" />

          <q-select
            v-model="locale"
            :options="localeOptions"
            dense
            borderless
            emit-value
            map-options
            options-dense
            style="min-width: 120px;"
            class="q-ml-md"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
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
  { value: 'en-US', label: 'English' },
  { value: 'chs', label: '简体中文' },
  { value: 'cht', label: '繁体中文' },
];

// const { locale } = useI18n({ useScope: 'global' });
export default defineComponent({
  name: 'MainLayout',
  components: {},
  data() {
    return {
      
    };
  },

  setup() {
    // const { t } = useI18n();
    const { locale } = useI18n({ useScope: 'global' });
    // const { locale } = i18n({ useScope: 'global' });

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
.tMenu {
  background-color: #1976d2;
  color: white;
}
</style>
