<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useAmiibosStore } from "../stores/amiibos";
import { storeToRefs } from "pinia";

const route = useRoute();

const amiibosStore = useAmiibosStore();
const { fetchAmiibo } = amiibosStore;
const { amiibo } = storeToRefs(amiibosStore);

onBeforeMount(async () => {
    const {
        params: { tail },
    } = route;

    await fetchAmiibo(tail);
    console.log(amiibo.value);
});
</script>

<template>
  <body class="left-sidebar is-preload">
    <div id="page-wrapper">
      <TheHeader />
      <section id="main">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <section class="box">
                <header>
                  <h3>Infos</h3>
                </header>
                <p>
                  amiiboSeries: <b>Animal Crossing</b> <br />
                  character: Cube<br />
                  gameSeries: Animal Crossing<br />
                  type: card
                </p>
              </section>
              <section class="box">
                <header>
                  <h3>Dates sorties</h3>
                </header>

                <ul class="divided">
                  <li>au: 2016-03-19</li>
                  <li>eu: 2016-03-18</li>
                  <li></li>
                  <li></li>
                </ul>
              </section>
            </div>
            <div class="col-8 col-12-medium imp-medium">
              <article class="box post">
                <a href="#" class="featured"
                  ><img
                    src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00800102-035d0302.png"
                    alt=""
                /></a>
                <header>
                  <h2>Name</h2>
                  <p>type</p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
      <TheFooter />
    </div>
  </body>
</template>

<style scoped></style>
