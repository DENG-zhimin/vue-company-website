<template>
  <div class="column justify-end">
    <q-toolbar class="row justify-end bg-white text-grey-10 shadow-2">
      <q-space />

      <q-btn
        stretch
        flat
        v-for="(item, index) in topMenu"
        :key="index"
        :label="$t(item.title)"
        class="text-h6 text-h4"
        style="width: fit-content"
        @click="goCate(item.title)"
      />

      <q-space></q-space>

      <div class="cursor-pointer">
        <q-btn
          flat
          class="text-white"
          icon="search"
          text-color="grey-10"
        />
        <q-popup-edit v-model="schWord" :validate="val => val.length > 2" @save="doSch()" class="sch-input">
          <template v-slot="scope">
            <q-input
              autofocus
              dense
              v-model="scope.value"
              :model-value="scope.value"
              :hint="$t('search words')"
              :rules="[
                val => scope.validate(val) || 'More than 2 chars required'
              ]"
            >
              <template v-slot:after>
                <q-btn
                  flat dense color="negative" icon="cancel"
                  @click.stop="scope.cancel"
                />

                <q-btn
                  flat dense color="positive" icon="check_circle"
                  @click.stop="scope.set"
                  :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"
                />
              </template>
            </q-input>
          </template>
        </q-popup-edit>
      </div>
      
      <!-- <q-input class="sch-input" v-model="schWord" v-show="showSch" outlined
        dense filled
      ></q-input>

      <q-btn
        flat
        class="text-white"
        icon="search"
        type="a"
        to="/"
        text-color="grey-10"
        @mouseover="showSch=true"
        @click="doSch"
      /> -->
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { menu_if } from 'src/models/models';
import { useI18n } from 'vue-i18n';
// import prodCateVue from './prodCate.vue';

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
    path: 'housing',
    avatar: '',
    children: m_housing.value,
  },
  {
    title: 'm_lens',
    path: 'lens',
    avatar: '',
    children: m_lens.value,
  },
  {
    title: 'm_strobes',
    path: 'strobe',
    avatar: '',
    children: m_strobes.value,
  },
  {
    title: 'm_flashlight',
    path: 'flashlight',
    avatar: '',
    children: m_flashlight.value,
  },
  {
    title: 'm_accessories',
    path: 'accessories',
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
    const router = useRouter();
    const { locale } = useI18n({ useScope: 'global' });
    const schWord = ref('');
    const showSch = ref(false);

    const goCate = (prodRoute: string) => {
      router
        .push({
          name: 'prodCate',
          params: {
            cate: prodRoute,
          },
        })
        .catch((e) => {
          console.log(e);
        });
    };
    const doSch = () => {
      // console.log(schWord.value);
      router.push({
        name: 'prodCate',
        params: {
          cate: 'housing',
        }
      }).catch(e=>{
        console.log(e)
      })
    };
    return {
      showSch,
      locale,
      topMenu,
      localeOptions,
      schWord,
      goCate,
      doSch,
    };
  },
});
</script>

<style lang="scss" scoped>
.tMenu {
  background-color: #1976d2;
  color: white;

}
.sch-input {
  margin-right: 300px;
}
</style>
