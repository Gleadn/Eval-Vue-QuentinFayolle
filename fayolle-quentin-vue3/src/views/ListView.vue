<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useAmiibosStore } from "../stores/amiibos";
import { storeToRefs } from "pinia";

const router = useRouter();
const amiibosStore = useAmiibosStore();
const { fetchAllAmiibos } = amiibosStore;
const { allAmiibos } = storeToRefs(amiibosStore);

onBeforeMount(async () => {
  await fetchAllAmiibos();
});
</script>

<template>
  <body class="no-sidebar is-preload">
    <div id="page-wrapper">
      <TheHeader />
      <!-- Main -->
      <section id="main">
        <div class="container">
          <!-- Content -->
          <article class="box post">
            <header>
              <h2>Ma Collection (10 par 10)</h2>
              <p>Page 1/n</p>
            </header>
            <table>
              <tr>
                <th>Character</th>
                <th>game Series</th>
                <th>Action</th>
              </tr>
              <tr
                v-for="(amiibo, index) in allAmiibos.slice(0, 10)"
                :key="index"
              >
                <td>{{ amiibo.character }}</td>
                <td>{{ amiibo.gameSeries }}</td>
                <td><button>voir</button></td>
              </tr>
            </table>
            <button>Charger plus</button>
          </article>
        </div>
      </section>
    </div>
    <TheFooter />
  </body>
</template>

<style scoped></style>
