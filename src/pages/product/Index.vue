<template>
  <div class="text-grey-8 bg-grey-2 q-pb-lg column justify-start">
    <div class="row items-start justify-center full-height">
      <q-img src="~src/assets/imgs/banner-4.jpg" height="250px" />
    </div>
    <div class="row justify-center">
      <h2>{{ $t(params.cate) }}</h2>
    </div>
    <div class="row justify-center q-pa-md shadow-1">
      <div class="row shadow-1 q-ma-md q-pa-sm prod-box" v-for="(prod, index) in prods" :key="index" >
        <!-- <div class="separator bg-grey-5 q-mx-md"></div> -->
        <router-link class="row justify-center content-center card-img q-my-lg q-py-lg " tag="li" 
          :to=" { name: prod.route_name, params: {id: prod.id, name: prod.name, img: prod.img } } " > 
          <q-img
            :src="require('/src/assets/imgs/' + prod.img)"
            class="card-img"
          />
          <div class="text-h6 text-center text-grey-8">{{ prod.name }}</div>
        </router-link>
        
        <!-- <div class="separator bg-grey-5 q-mx-md"></div> -->
      </div>
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

.prod-box:hover
  box-shadow: 0px 0px 5px 5px $grey-6

.separator
  width: 1px
  // border: solid 1px 
</style>
