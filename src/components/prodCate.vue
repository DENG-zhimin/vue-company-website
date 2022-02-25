<template>
    <div class="row ">
      <div class="col row col-xs-12 col-sm-6 q-pa-sm ">
        <div class=" col row cate-block bg-green-2 ">
          <div
            class="col column justify-center items-center text-h4 text-bold text-grey-8 cate-desc  "
          >
            {{$t('cameraHousing')}}
          </div>
          <div class="col-6 ">
            <router-link :to="{name:'prodCate', params: {cate: 'housing'} }">
              <q-img
                src="~src/assets/imgs/aoi_uh-epl10-gry.png"
                fit="contain"
                height="80%"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-sm column ">
        <!-- right part begin -->
        <div class="col row bg-cyan-2 q-mb-sm cate-block">
          <!-- strobe box begin -->
          <div class="row col content-center">
            <div
              class="col-6 column justify-center text-h4 text-bold text-grey-8 items-center "
            >
              {{$t('strobe')}}
            </div>
            <div class="col-6">
              <router-link :to="{name:'prodCate', params: {cate: 'strobe'} }">
                <q-img
                  src="~src/assets/imgs/aoi_strobe.png"
                  height="150px"
                  fit="contain"
                />
              </router-link>
            </div>
          </div>
        </div>
        <!-- strobe box end -->
        <div class="col row q-gutter-x-md q-pt-sm">
          <div class="col bg-cyan-2 column justify-center cate-block ">
            <div class="row col-6 content-center">
              <div na
                class="col-6 column justify-center text-h4 text-bold text-grey-8 items-center cate-desc"
              >
                {{ $t('cameraPorts')}}
              </div>
              <div class="col-6">
                <router-link :to="{name:'prodCate', params: {cate: 'ports'} }">
                  <q-img
                    src="~src/assets/imgs/aoi_port.png"
                    height="150px"
                    fit="contain"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="col row bg-cyan-2 justify-center content-center  cate-block"
          >
            <div class="col row">
              <div
                class="col-6 column justify-center items-center text-h4 text-bold text-grey-8 cate-desc"
              >
                {{$t('accessories')}}
              </div>
              <div class="col-6">
                <router-link :to="{name:'prodCate', params: {cate: 'accessories'} }">
                  <q-img
                    src="~src/assets/imgs/aoi_bracket.png"
                    height="150px"
                    fit="contain"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="sass">
.cate-block
  border-radius: 5px

.cate-desc
  padding-left: 10px
  word-wrap: break-word
  word-break: break-all

</style>
