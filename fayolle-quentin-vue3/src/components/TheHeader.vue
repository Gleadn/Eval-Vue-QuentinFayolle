<script></script>

<template>
  <section id="header">
    <!-- Logo -->
    <h1>AmiiVue</h1>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li :class="{ current: $route.path === '/' }"><router-link to="/">Home</router-link></li>
        <li :class="{ current: $route.path === '/list' }"><router-link to="/list">Liste Amiibo</router-link></li>
      </ul>
    </nav>
    <!-- Banner -->
      <section id="banner" v-if="$route.path === '/'">
        <header>
          <h2>Hey.  Bienvenue sur ma collection</h2>
        </header>
      </section>
  </section>
</template>

<style scoped></style>
