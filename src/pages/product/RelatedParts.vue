<template>
  <div class="column shadow-1 q-pa-sm q-pl-md q-ma-md full-width  ">
   <div class="text-h6 q-mb-md ">related partes</div> 
   <div class="row q-gutter-md justify-start ">
     <router-link 
        v-for="(prod, index) in parts"
        :key="index"
        tag="li"
        class="shadow-1 hover-5"
        :to="{ name: 'prodInfo', params: {id: prod.id, name: prod.name, img: prod.img } }"
     >
      <q-img
        width="80px" height="80px" fit="scale-down" :src="require('/src/assets/imgs/' + prod.img)" ></q-img>
      </router-link>
   </div>
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
const parts = ref([
  {
    name: 'bracket1',
    img: 'aoi_ad-m67-04.jpg',
    id: '1',
  },
  {
    name: 'bracket2',
    img: 'aoi_bracket.png',
    id: '2',
  },
  {
    name: 'bracket3',
    img: 'aoi_ad-m67-04.jpg',
    id: '1',
  },
  {
    name: 'bracket4',
    img: 'aoi_bracket.png',
    id: '2',
  },
  {
    name: 'bracket5',
    img: 'aoi_ad-m67-04.jpg',
    id: '1',
  },
  {
    name: 'bracket6',
    img: 'aoi_bracket.png',
    id: '2',
  },
])
export default defineComponent({
  setup() {
    return {
      parts,
    }
  },
})
</script>

<style lang="sass" scoped>
.prod-box
  width: 80px
  height: 80px

</style>