<template>
  
  <div class="row q-pa-sm">
      <!-- <div class="col row q-pa-sm "> -->
        <div :class=" hotProdCSS ">
          <div class="col-md-6 col-xs-12 q-pa-md">
            <router-link to="/products/camera_housing/index">
              <q-img
                src="~src/assets/imgs/aoi_housing_octopus.png"
                fit="contain"
                height="80%"
              />
            </router-link>
          </div>
          <div class="col column justify-center items-center text-h4 text-bold text-grey-8 q-pa-md cate-desc  ">
            <div class="q-pa-xl">
              <div class="text-h3 text-bold text-yellow-6">Octopus Housing</div>
              <div class="text-h4 text-bold q-mt-sm q-mb-xs text-grey-9">
                Sound Protection
              </div>
              <q-badge label="Unique style" color="orange" rounded />
              <div class="text-caption text-h6 text-bold text-grey-3">
                Your ideal and special underwater photography equipment! Sound
                protection, Leaking warning and Handy operations.
              </div>
          
            </div>
            <q-btn
              bordered
              class="shadow-8 q-mt-lg"
              @click.stop="add2Cart('Added Successfully')"
              >
              Add to Cart
            </q-btn>
          </div>
          

        </div>
      <!-- </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import {Screen} from 'quasar'
import * as msg from 'src/boot/msg';

export default defineComponent({
  setup() {
    const hotProdCSS = ref('col row cate-block bg-teal-4')
    onBeforeMount(() => {
      if (Screen.gt.xs === true ) {
        hotProdCSS.value += ' reverse '
      } 
    });
    const add2Cart = (prod: string) => {
      msg.info(prod, true);
    };
    return {
      hotProdCSS,
      add2Cart,
    };
  },
  created () {
    // console.log(this.$q.version);
  }
});
</script>
<style lang="sass">
$hot_prod_ht: 400px
.prod-img
  // max-height: 100%
  max-height: $hot_prod_ht
  max-width: 100%
  margin: Auto
#hot-prod
  // max-height: $hot_prod_ht
  height: fit-content
</style>
