<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <top-tool-bar />
    </q-header>

    <q-page-container >
      <prod-tool-bar />
      <router-view />
      <my-footer />

    </q-page-container>
    <float-menu />

  </q-layout>
</template>

<script lang="ts">
import TopToolBar from 'src/components/topToolBar.vue';
import prodToolBar from 'src/components/prodToolBar.vue';
import myFooter from 'src/components/footer.vue';
import { defineComponent } from 'vue';
import FloatMenu from 'src/components/FloatMenu.vue'

  // 滚动条的长度
  // const getScrollHeight = () => {
  //     return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  // }


export default defineComponent({
  name: 'MainLayout',
  components: { TopToolBar, prodToolBar, myFooter, FloatMenu },
  data() {
    return {};
  },

  setup() {
    return { 
     };
  },
});


</script>

<style lang="sass" scoped>

</style>
