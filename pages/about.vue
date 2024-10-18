<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg mx-auto dark:bg-gray-900">
      <div class="px-8">
        <AuthorIntro></AuthorIntro>
        <div class="border-b border-yellow-400"></div>
        <Expertise></Expertise>
        <div class="mt-10 border-b border-yellow-400"></div>
        <TimeLine></TimeLine>
        <div class="mt-10 border-b border-yellow-400"></div>
        <TimeLine2></TimeLine2>
      </div>
    </div>
  </div>
</template>

<script setup>

import AuthorIntro from "@/components/AuthorIntro.vue";
import Expertise from "@/components/Expertise.vue";
import TimeLine from "@/components/TimeLine.vue";
import TimeLine2 from "@/components/TimeLine2.vue";
</script>

<style></style>
