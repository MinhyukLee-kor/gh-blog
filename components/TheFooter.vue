<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://github.com/${author.github}`"
        ><span class="sr-only">github</span>
          <img src="../assets/icons/github_new.svg" alt="github" class="w-8 h-8 text-black" />
        </a>
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${author.email}`"
        ><span class="sr-only">mail</span>
          <img src="../assets/icons/mail.svg" alt="mail" class="w-8 h-8 text-black" />
        </a>
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://instagram.com/${author.socials.instagram}`"
        ><span class="sr-only">instagram</span>
          <img src="../assets/icons/instagram.svg" alt="github" class="w-8 h-8 text-black" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import author from "@/data/author.js";
</script>
