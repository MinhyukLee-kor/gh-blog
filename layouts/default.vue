<template>
  <!-- Section 1 -->
  <section class="w-full pb-12 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </section>
</template>

<script>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {TheFooter, TheHeader}
};
</script>

<style>
::selection {
  background-color: yellow;
}
</style>
