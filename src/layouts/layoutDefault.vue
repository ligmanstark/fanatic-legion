<script setup lang="ts">
import { RouterLink } from "vue-router"
import LogoFNT from "../components/icons/IconLogoFNT.vue"
</script>
<template>
  <div class="header">
    <LogoFNT />
    <h1>Fanatic Legion.</h1>
  </div>
  <nav>
    <RouterLink to="/">Домашка</RouterLink>
    <RouterLink to="/map">Карта суверенитета</RouterLink>
    <RouterLink to="/content">Контент</RouterLink>
    <RouterLink to="/about">О нас</RouterLink>
  </nav>
</template>
<style scoped>
.header {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 260px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-right: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: -1rem;
  }
}
</style>
