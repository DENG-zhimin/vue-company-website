<template>
  <div class="q-pa-sm ">
    <div class="row q-gutter-x-md ">
      <div class="col row bg-green-2 cate-block">
        <div
          class="col column justify-center text-h4 text-bold text-grey-8 items-center cate-desc"
        >
          {{$t('cameraHousing')}}
        </div>
        <div class="col-6">
          <router-link to="/products/camera_housing/index">
            <q-img
              src="~src/assets/imgs/aoi_uh-epl10-gry.png"
              fit="contain"
              height="80%"
            />
          </router-link>
        </div>
      </div>
      <div class="col column q-gutter-y-md">
        <!-- right part begin -->
        <div class="col row bg-cyan-3 cate-block">
          <!-- strobe box begin -->
          <div class="row col content-center">
            <div
              class="col-6 column justify-center text-h4 text-bold text-grey-8 items-center cate-desc"
            >
              {{$t('strobe')}}
            </div>
            <div class="col-6">
              <router-link to="/products/camera_housing/index">
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
        <div class="col row q-gutter-x-md">
          <div class="col bg-cyan-2 column justify-center cate-block">
            <div class="row col-6 content-center">
              <div
                class="col-6 column justify-center text-h4 text-bold text-grey-8 items-center cate-desc"
              >
                {{ $t('cameraPorts')}}
              </div>
              <div class="col-6">
                <router-link to="/products/camera_housing/index">
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
            class="col row bg-cyan-2 justify-center content-center cate-block"
          >
            <div class="col row">
              <div
                class="col-6 column justify-center text-h4 text-bold text-grey-8 items-center cate-desc"
              >
                {{$t('accessories')}}
              </div>
              <div class="col-6">
                <router-link to="/products/camera_housing/index">
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
