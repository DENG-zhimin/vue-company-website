<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>
    <div>
      <top-tool-bar />
      <prod-tool-bar />
    </div>

    <q-page-container>
      <router-view />
      <my-footer />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import TopToolBar from 'src/components/topToolBar.vue';
import prodToolBar from 'src/components/prodToolBar.vue';
import myFooter from 'src/components/footer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: { TopToolBar, prodToolBar, myFooter },
  data() {
    return {};
  },

  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>

</style>
