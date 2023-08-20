<template>
  <a-layout>
    <a-layout-header><Header/></a-layout-header>
    <a-layout-content><router-view/></a-layout-content>
    <a-layout-footer><Footer/></a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

</script>