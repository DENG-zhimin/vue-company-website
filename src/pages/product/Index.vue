<template>
  <div class="text-grey-8 q-pb-lg column justify-start">
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
        bordered="false"
        separator="cell"
      >
        <template v-slot:body="props">
          <q-tr :props="props" no-hover>
            <q-td key="prod1" v-if="props.row.prod1" :props="props">
              <!-- {{ props.row.prod1 }} -->
              <div class="column items-center justify-center q-ma-md">
                <div class="text-h6 text-grey-8 self-start">
                  {{ props.row.prod1.name }}
                </div>
                <div class="self-start">{{ props.row.prod1.img }}</div>
                <router-link
                  :to="{
                    name: 'prodInfo',
                    params: {
                      name: props.row.prod1.name,
                      id: props.row.prod1.id,
                      img: props.row.prod1.img,
                    },
                  }"
                >
                  <q-img
                    class="q-my-lg"
                    :src="require('/src/assets/imgs/' + props.row.prod1.img)"
                    height="160px"
                    width="160px"
                  ></q-img>
                </router-link>

                <div class="row full-width justify-evenly text-center">
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod1.id }}
                  </q-chip>
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod1.route_name }}
                  </q-chip>
                  <q-chip square color="blue-3" class="col-5">
                    share on Wechat
                  </q-chip>
                  <q-chip
                    square
                    color="blue-5"
                    class="col-5"
                    clickable
                    @click="downloadManual('download started.')"
                  >
                    Download Manual
                  </q-chip>
                </div>
              </div>
            </q-td>
            <q-td key="prod2" :props="props" v-if="props.row.prod2">
              <!-- {{ props.row.prod2 }} -->
              <div class="column items-center justify-center q-ma-md">
                <div class="text-h6 text-grey-8 self-start">
                  {{ props.row.prod2.name }}
                </div>
                <div class="self-start">{{ props.row.prod2.img }}</div>
                <router-link
                  :to="{
                    name: 'prodInfo',
                    params: {
                      name: props.row.prod2.name,
                      id: props.row.prod2.id,
                      img: props.row.prod2.img,
                    },
                  }"
                >
                  <q-img
                    class="q-my-lg"
                    :src="require('/src/assets/imgs/' + props.row.prod2.img)"
                    height="160px"
                    width="160px"
                  ></q-img>
                </router-link>

                <div class="row full-width justify-evenly text-center">
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod2.id }}
                  </q-chip>
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod2.route_name }}
                  </q-chip>
                  <q-chip square color="blue-3" class="col-5">
                    Share on Wechat
                  </q-chip>
                  <q-chip
                    square
                    color="blue-5"
                    class="col-5"
                    clickable
                    @click="downloadManual('download started.')"
                  >
                    Download Manual
                  </q-chip>
                </div>
              </div>
            </q-td>
            <q-td key="prod3" :props="props" v-if="props.row.prod3">
              <!-- {{ props.row.prod3 }} -->
              <div class="column items-center justify-center q-ma-md">
                <div class="text-h6 text-grey-8 self-start">
                  {{ props.row.prod3.name }}
                </div>
                <div class="self-start">{{ props.row.prod3.img }}</div>
                <router-link
                  :to="{
                    name: 'prodInfo',
                    params: {
                      name: props.row.prod3.name,
                      id: props.row.prod3.id,
                      img: props.row.prod3.img,
                    },
                  }"
                >
                  <q-img
                    class="q-my-lg"
                    :src="require('/src/assets/imgs/' + props.row.prod3.img)"
                    height="160px"
                    width="160px"
                  ></q-img>
                </router-link>

                <div class="row full-width justify-evenly text-center">
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod3.id }}
                  </q-chip>
                  <q-chip square color="grey" class="col-5 q-ma-none">
                    {{ props.row.prod3.route_name }}
                  </q-chip>
                  <q-chip square color="blue-3" class="col-5">
                    share on Wechat
                  </q-chip>
                  <q-chip
                    square
                    color="blue-5"
                    class="col-5"
                    clickable
                    @click="downloadManual('download started.')"
                  >
                    Download Manual
                  </q-chip>
                </div>
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
import { info } from 'src/boot/msg';

// make the prods be a 2 dimension array

const columns = [
  { name: 'prod1', field: 'prod1' },
  { name: 'prod2', field: 'prod2' },
  { name: 'prod3', field: 'prod3' },
  // {name: 2, field: 2},
];

interface Prod {
  name: string;
  id: string;
  img: string;
  route_name: string;
}

interface ProdRow {
  prod1: object;
  prod2: object;
  prod3: object;
}

const downloadManual = (msg: string) => {
  info(msg, true);
};
export default defineComponent({
  props: {
    cate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const allProds = [
      {
        name: 'PROD-01',
        id: '1531',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-02',
        id: '1532',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-03',
        id: '1533',
        img: 'housing_octopus.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-04',
        id: '1534',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-05',
        id: '1535',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-06',
        id: '1536',
        img: 'housing_octopus.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-07',
        id: '1537',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-08',
        id: '1538',
        img: 'uh-epl10-gry.png',
        route_name: 'prodInfo',
      },
      {
        name: 'PROD-09',
        id: '1539',
        img: 'housing_octopus.png',
        route_name: 'prodInfo',
      },
    ];

    // console.log(allProds);
    let prods = [];

    if (props.cate === 'm_lens') {
      prods = allProds.slice(6);
    } else if (props.cate === 'm_strobes') {
      prods = allProds.slice(7);
    } else if (props.cate === 'm_flashlight') {
      prods = allProds.slice(5);
    } else {
      prods = allProds;
    }

    // console.log(myProds);

    // 3 prods per row
    const rowItem = 3;
    const rowNum = Math.ceil(prods.length / rowItem);
    // console.log(prods);

    const prodArr = [];
    for (let i = 0; i < rowNum; i++) {
      const prodRow: ProdRow = {
        prod1: prods[i * 3 + 1],
        prod2: prods[i * 3 + 2],
        prod3: prods[i * 3 + 3],
      };
      prodArr.push(prodRow);
    }

    console.log(prodArr);

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
      downloadManual,
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
