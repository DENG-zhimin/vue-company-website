<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div>
        <top-tool-bar />
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: { TopToolBar, prodToolBar },
  data() {
    return {};
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
