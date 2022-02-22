<template>
  <div id="hot-prod" class="q-pa-sm">
    <q-card class="prod-card bg-teal-5" flat bordered rounded>
      <q-card-section horizontal class="row justify-center">
        <q-card-section class="q-pt-xs col column justify-center items-center">
          <div style="width: 55%">
            <div class="text-h3 text-bold text-yellow-6">Octopus Housing</div>
            <div class="text-h4 text-bold q-mt-sm q-mb-xs">
              Intact Protection
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
            @click.stop="add2Cart('A Camera Housing')"
          >
            Add to Cart
          </q-btn>
        </q-card-section>

        <q-card-section class="col-5">
          <router-link to="/products/camera_housing/index">
            <q-img
              class="rounded-borders prod-img"
              src="~src/assets/imgs/aoi_housing_octopus.png"
              fit="scale-down"
            />
          </router-link>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as msg from 'src/boot/msg';

export default defineComponent({
  setup() {
    const add2Cart = (prod: string) => {
      msg.info(prod, true);
    };
    return {
      add2Cart,
    };
  },
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
