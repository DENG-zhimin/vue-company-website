<template>
  <div class="text-grey-8 bg-grey-2 q-pb-lg column justify-start">
    <div class="row items-start justify-center full-height">
      <q-img src="~src/assets/imgs/banner-4.jpg" height="250px" />
    </div>
    <div class="row justify-center">
      <h2>{{ $t(params.cate) }}</h2>
    </div>
    <div class="row justify-center q-gutter-x-md">
      <q-card class="prod-card" v-for="(prod, index) in prods" :key="index">
        <div class="column items-center" @click="goProd(prod)">
          <span class="col-11">
            <q-img
              :src="require('/src/assets/imgs/' + prod.img)"
              class="card-img"
            />
          </span>

          <div class="col">
            <q-card-section>
              <div class="text-h6 text-center text-grey-8">{{ prod.name }}</div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const prods = [
  {
    name: 'AOI-01',
    id: '1531',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-02',
    id: '1532',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-03',
    id: '1533',
    img: 'aoi_housing_octopus.png',
    route_name: 'prodInfo',
  },
];

interface Prod {
  name: string;
  id: string;
  img: string;
  route_name: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const goProd = (prod: Prod) => {
      router
        .push({
          name: prod.route_name,
          params: {
            img: prod.img,
            name: prod.name,
            id: prod.id,
          },
        })
        .catch((e) => {
          console.log(e);
        });
    };
    onMounted(() => {
      // console.log('I got route of index.');
    });
    return {
      params: route.params,
      prods,
      goProd,
    };
  },
});
</script>

<style lang="sass" scoped>
.prod-card
  max-width: 250px
  width: 250px

.prod-card:hover
  cursor: pointer

.card-img
  height: 220px
  width: 220px
  max-width: 220px
  max-height: 220px
</style>
