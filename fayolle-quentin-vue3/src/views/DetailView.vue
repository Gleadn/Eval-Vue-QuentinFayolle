<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useAmiibosStore } from "../stores/amiibos";
import { storeToRefs } from "pinia";

const route = useRoute();
const { params: { tail } } = route;
console.log(tail);

const amiibosStore = useAmiibosStore();
const { fetchAmiibo } = amiibosStore;
const { currentAmiibo } = storeToRefs(amiibosStore);
let amiibo = ref({});

onBeforeMount(async () => {
    await fetchAmiibo(tail);
    amiibo = currentAmiibo.value[0];
    console.log(amiibo);
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
                  amiiboSeries: <b>{{amiibo.amiiboSeries}}</b> <br />
                  character: {{amiibo.character}}<br />
                  gameSeries: {{amiibo.gameSeries}}<br />
                  type: {{amiibo.type}}
                </p>
              </section>
              <section class="box">
                <header>
                  <h3>Dates sorties</h3>
                </header>

                <ul class="divided">
                  <li>au: </li>
                  <li>eu: </li>
                  <li></li>
                  <li></li>
                </ul>
              </section>
            </div>
            <div class="col-8 col-12-medium imp-medium">
              <article class="box post">
                <a href="#" class="featured"
                  ><img
                    :src="amiibo.image"
                    alt=""
                /></a>
                <header>
                  <h2>{{amiibo.character}}</h2>
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
