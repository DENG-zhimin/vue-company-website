<template>
  <div class="text-grey-8  q-pb-lg column justify-start">
    <div class="row items-start justify-center full-height">
      <q-img src="~src/assets/imgs/banner-4.jpg" height="250px" />
    </div>
    <div class="row justify-center">
      <h2>{{ $t(params.cate) }}</h2>
    </div>
    <div class="row justify-center q-pa-md shadow-1">
      <q-table
        :rows="prodArr"
        :columns="columns"
        flat
        hide-header
        hide-bottom
        hide-no-data
        bordered=false
        separator="cell"
      >
        <template v-slot:body="props">
            <q-tr :props="props" no-hover>
              <q-td key="prod1" v-if="props.row.prod1" :props="props">
                <!-- {{ props.row.prod1 }} -->
                <div class="column items-center justify-center q-ma-xl">
                  <router-link :to="{name: 'prodInfo', params: {name: props.row.prod1.name, id: props.row.prod1.id, img: props.row.prod1.img} }">

                    <q-img :src="require('/src/assets/imgs/' + props.row.prod1.img)" height="160px" width="160px"></q-img>
                  </router-link>
                  <div class="text-h6 text-red"> {{ props.row.prod1.name }} </div>
                  <q-chip square color="grey" > {{ props.row.prod1.id }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod1.img }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod1.route_name }} </q-chip>

                </div>
              </q-td>
              <q-td key="prod2"  :props="props" v-if="props.row.prod2">
                <!-- {{ props.row.prod2 }} -->
                <div class="column items-center justify-center q-ma-xl">
                  <router-link :to="{name: 'prodInfo', params: {name: props.row.prod2.name, id: props.row.prod2.id, img: props.row.prod2.img} }">

                    <q-img :src="require('/src/assets/imgs/' + props.row.prod2.img)" height="160px" width="160px"></q-img>
                  </router-link>
                  <div class="text-h6 text-red"> {{ props.row.prod2.name }} </div>
                  <q-chip square color="grey" > {{ props.row.prod2.id }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod2.img }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod2.route_name }} </q-chip>

                </div>
              </q-td>
              <q-td key="prod3" :props="props" v-if="props.row.prod3">
                <!-- {{ props.row.prod3 }} -->
                <div class="column items-center justify-center q-ma-xl">
                  <router-link :to="{name: 'prodInfo', params: {name: props.row.prod3.name, id: props.row.prod3.id, img: props.row.prod3.img} }">

                    <q-img :src="require('/src/assets/imgs/' + props.row.prod3.img)" height="160px" width="160px"></q-img>
                  </router-link>
                  <div class="text-h6 text-red"> {{ props.row.prod3.name }} </div>
                  <q-chip square color="grey" > {{ props.row.prod3.id }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod3.img }} </q-chip>
                  <q-chip square color="grey" > {{ props.row.prod3.route_name }} </q-chip>

                </div>
              </q-td>
            </q-tr>
        </template>

      </q-table>
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
    name: 'AOI-04',
    id: '1534',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-05',
    id: '1535',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-06',
    id: '1536',
    img: 'aoi_housing_octopus.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-07',
    id: '1537',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-08',
    id: '1538',
    img: 'aoi_uh-epl10-gry.png',
    route_name: 'prodInfo',
  },
  {
    name: 'AOI-09',
    id: '1539',
    img: 'aoi_housing_octopus.png',
    route_name: 'prodInfo',
  },
];


const rowItem = 3
const rowNum = Math.ceil(prods.length/rowItem);

// make the prods be a 2 dimension array


const columns = [
  {name: 'prod1', field: 'prod1'},
  {name: 'prod2', field: 'prod2'},
  {name: 'prod3', field: 'prod3'},
  // {name: 2, field: 2},
];

interface Prod {
  name: string;
  id: string;
  img: string;
  route_name: string;
}

interface ProdRow {
  prod1: any,
  prod2: any,
  prod3: any,
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const prodArr = [];
    for (let i = 0; i < rowNum; i ++ ) {
      const prodRow1: ProdRow = {
        prod1 : prods[(i*3 + 1)],
        prod2 : prods[(i*3 + 2)],
        prod3 : prods[(i*3 + 3)],
      }
      prodArr.push(prodRow1);
    }

    console.log(prodArr)

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
      columns,
      prodArr,
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

.q-table td
  border-color: rgba(74, 61, 61, 0.62)
</style>
