<script setup>
import TheHeader from "../components/TheHeader.vue";
import CardHolder from "../components/CardHolder.vue";
import TheFooter from "../components/TheFooter.vue";

import { onBeforeMount, ref } from "vue";
import { useAmiibosStore } from "../stores/amiibos";
import { storeToRefs } from "pinia";

const amiibosStore = useAmiibosStore();
const { fetchAllAmiibos } = amiibosStore;
const { allAmiibos } = storeToRefs(amiibosStore);

onBeforeMount(async () => {
  await fetchAllAmiibos();
});

const randomNumber = Math.floor(Math.random() * 801);

</script>

<template>
  <body class="homepage is-preload">
    <div id="page-wrapper">
      <!-- Header -->
      <TheHeader />
      <!-- Intro -->
      <!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
      <section id="intro" class="container">
        <div class="row">
          <div
            class="col-4 col-12-medium"
            v-for="(amiibo, index) in allAmiibos.slice(randomNumber, randomNumber + 3)"
            :key="index"
          >
            <CardHolder :amiibo="amiibo" />
          </div>
        </div>
        <footer>
          <ul class="actions">
            <li>
              <router-link to="/list" class="button large"
                >Liste complète</router-link
              >
            </li>
          </ul>
        </footer>
      </section>
      <!-- Footer -->
      <TheFooter />
    </div>
  </body>
</template>
