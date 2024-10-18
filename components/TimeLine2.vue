<template>
  <div class="opacity-100 mt-10">
    <h2
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    > Project </h2>
    <ol class="ml-3 mt-10 relative border-l border-gray-200 dark:border-gray-700">
      <li v-for="time in timeline" class="mb-2 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
        </span>
        <h3
          class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
        >
          {{ time.title }}
          <span v-if="time.currently" class="bg-yellow-300 text-red-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            Currently
          </span>
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >{{ time.subtitle }}</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ time.description }}
        </p>
      </li>
    </ol>
  </div>
</template>

<script setup>
import author from "@/data/author.js";

const timeline = author.timeline2;
</script>

<style></style>
