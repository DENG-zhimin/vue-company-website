<template>
  <div class="q-pa-sm">
      <div class="row q-gutter-x-md cate-block " >
        <div class="col row bg-green-2 ">
          <div class="col column justify-center text-h4 text-bold items-center cate-desc">
            Camera Housing
          </div>
          <div class="col-6">
            <router-link to="/products/camera_housing/index">
              <q-img src="~src/assets/imgs/aoi_uh-epl10-gry.png" />
            </router-link>
          </div>
        </div>
        <div class="col column q-gutter-y-md">
          <div class="col bg-cyan-2 ">
            <div class="row col-6 ">
              <div class="col-5 column justify-center text-h4 text-bold items-center cate-desc">
                Strobe
              </div>
              <div class="col-7">
                <router-link to="/products/camera_housing/index">
                  <q-img src="~src/assets/imgs/aoi_strobe.png"
                    height="150px"
                    fit="scale-down"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div class="col row q-gutter-x-md">
            <div class="col bg-cyan-2 column justify-center">
              <div class="row col-6 content-center">
                <div class="col-6 column justify-center text-h4 text-bold items-center cate-desc">
                  Camera Ports
                </div>
                <div class="col-6">
                  <router-link to="/products/camera_housing/index">
                    <q-img src="~src/assets/imgs/aoi_port.png"
                      height="150px"
                      fit="scale-down"
                    />
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col bg-cyan-2 column justify-center ">
              <div class="row contents-center ">
                <div class="col-6 row  content-center  text-h4 text-bold  cate-desc">
                  Accessories
                </div>
                <div class="col-6 q-pa-sm">
                  <router-link to="/products/camera_housing/index">
                    <q-img src="~src/assets/imgs/aoi_bracket.png" />
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
  height: 350px

.cate-desc
  padding-left: 10px 
  word-wrap: break-word
  word-break: break-all
</style>