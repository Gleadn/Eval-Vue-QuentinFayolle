<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

import { onBeforeMount, ref } from "vue";
import { useAmiibosStore } from "../stores/amiibos";
import { storeToRefs } from "pinia";

const amiibosStore = useAmiibosStore();
const { fetchAllAmiibos } = amiibosStore;
const { allAmiibos } = storeToRefs(amiibosStore);
const sliceInt = ref({
    pagination: 1,
    start: 0,
    end: 10,
});

const loadMore = () => {
    sliceInt.value.pagination++;
    sliceInt.value.start = sliceInt.value.end;
    sliceInt.value.end = sliceInt.value.end + 10;
};

onBeforeMount(async () => {
  await fetchAllAmiibos();
});
</script>

<template>
  <body class="no-sidebar is-preload">
    <div id="page-wrapper">
      <TheHeader />
      <section id="main">
        <div class="container">
          <article class="box post">
            <header>
              <h2>Ma Collection (10 par 10)</h2>
              <p>Page {{sliceInt.pagination}}/{{sliceInt.pagination}}</p>
            </header>
            <table>
              <tr>
                <th>Character</th>
                <th>game Series</th>
                <th>Action</th>
              </tr>
              <tr
                v-for="(amiibo, index) in allAmiibos.slice(sliceInt.start, sliceInt.end)"
                :key="index"
              >
                <td>{{ amiibo.character }}</td>
                <td>{{ amiibo.gameSeries }}</td>
                <td>
                    <router-link :to="`/detail/${amiibo.tail}`">
                        <button>voir</button>
                    </router-link>
                </td>
              </tr>
            </table>
            <button @click="loadMore">Charger plus</button>
          </article>
        </div>
      </section>
    </div>
    <TheFooter />
  </body>
</template>

<style scoped></style>
