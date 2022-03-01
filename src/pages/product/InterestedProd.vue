<template>
  <div class="column q-pa-sm q-ma-md full-width  ">
    <div class="column q-pa-md radius-5 shadow-1 ">
      <div class="text-h6 q-mb-md ">Interested products</div> 
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
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
const parts = ref([
  {
    name: 'Housing 1',
    img: 'aoi_housing_octopus.png',
    id: '1',
  },
  {
    name: 'Port',
    img: 'aoi_port.png',
    id: '2',
  },
  {
    name: 'Strobe',
    img: 'aoi_strobe.png',
    id: '1',
  },
  {
    name: 'Housing',
    img: 'aoi_uh-epl10-gry.png',
    id: '2',
  },
  {
    name: 'Housing',
    img: 'aoi_uh-epl10-gry.png',
    id: '1',
  },
  {
    name: 'Housing',
    img: 'aoi_uh-epl10-gry.png',
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