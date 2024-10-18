<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <img src="../public/author.jpg"
           loading="lazy"
           alt="me"
           class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full" />
      <div class="mb-2 mx-7 mt-4 justify-center items-center">
        <h1
          class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100"
        >
          {{ author.name }}
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          {{ author.position }}
        </div>
        <a
          :href="`mailto:${author.email}`"
          class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
        >
          {{ author.email }}
        </a>
      </div>
    </div>

    <div class="mx-7 hidden md:block">
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <img src="../assets/icons/mail.svg" alt="mail"/>
        <a :href="`mailto:${author.email}`"> {{ author.email }}</a>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <img src="../assets/icons/glob.svg" alt="glob"/>
        <p>{{ author.location }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <img src="../assets/icons/github_new.svg" alt="github"/>
        <a :href="`https://github.com/${author.github}`"> {{ author.github }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import author from "@/data/author.js";
</script>
