<template>
    
    <div class="col column bg-grey-4 q-ma-sm showcase">
      <div class="col row justify-center content-center text-h4 text-bold text-accent q-my-md">
        Our Partners
      </div>
      <div class="col-10 row justify-center ">
        <a v-for="(ptn, index) in partners " :key="index" :href="ptn.path" target="blank" >
          <div class="row content-center justify-center q-gutter-lg q-ma-sm">
            <q-img v-if="ptn.logo !==''" :src="require('/src/assets/imgs/logos/' + ptn.logo)"
              height="70px" width="120px"
             fit="scale-down" /> 
            <q-btn v-else flat type="a" class="text-h5 text-bold" :label="ptn.name"></q-btn>
          </div>
        </a>
        
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// interface partnerIF {
//   name: string
//   path: string
//   logo: string
// }

const partners = ref([
  {
    name: 'Olympus',
    path: 'http://www.olympus-global.com',
    logo: 'olympus-logo.gif',
  },
  {
    name: 'GoPro',
    path: 'http://www.gopro.com',
    logo: 'gopro-logo.webp',
  },
  {
    name: 'Backscatter',
    path: 'http://www.backscatter.com',
    logo: 'sca-logo.png',
  },
  {
    name: 'Sealife',
    path: 'http://www.sealife.com',
    logo: 'sealife-logo.webp',
  },
  {
    name: 'HKPOMA',
    path: '',
    logo: '',
  },
  {
    name: 'DRT SHOW',
    path: 'https://www.drtexpo.com/',
    logo: 'drt-logo.png',
  },

]);

export default defineComponent({
  setup() {
    return {
      partners,
    }
  }
})

</script>

<style lang="sass" scoped>
.showcase
  border-radius: 5px

.img-box 
  height: 70px
  width: 120px

.q-btn:hover,
.q-img:hover
  box-shadow: 0px 0px 5px 5px $grey-7

</style>