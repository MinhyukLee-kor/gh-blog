<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <div class="mb-6">
          <h2
            class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
          > Hi, I'm Minhyuk
          </h2>
          <div class="mt-8 mb-4 text-gray-500 dark:bg-gray-800 font-bold text-xl dark:text-blue-200 text-justify">
            <span>3년차 웹 개발자</span>
          </div>
          <div class="border-b border-yellow-400"></div>
          <div class="mt-10">
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100 align-baseline">
              <img src="../assets/icons/name.svg" alt="glob"/>
              <span class="ml-2 text-2xl">Name</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">이민혁</span>
            </div>
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100">
              <img src="../assets/icons/home.svg" alt="glob"/>
              <span class="ml-2 text-2xl">Location</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">대한민국, 서울특별시</span>
            </div>
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100">
              <img src="../assets/icons/birth.svg" alt="glob"/>
              <span class="ml-2 text-2xl">Birth</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">1993.02.01</span>
            </div>
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100">
              <img src="../assets/icons/email.svg" alt="glob"/>
              <span class="ml-2 text-2xl">E-mail</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">kazesky93@gmail.com</span>
            </div>
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100">
              <img src="../assets/icons/github_new.svg" alt="glob"/>
              <span class="ml-2 text-2xl">Github</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">github.com/MinhyukLee-kor</span>
            </div>
            <div class="my-2 font-bold text-gray-600 flex dark:text-blue-100">
              <img src="../assets/icons/instagram.svg" alt="glob"/>
              <span class="ml-2 text-2xl">Instagram</span>
            </div>
            <div class="my-2 mb-5 text-gray-600 flex dark:text-blue-100">
              <span class="text-xl">instagram.com/minhyuk_lee_0201</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import AuthorCard from "@/components/AuthorCard.vue";
import author from "@/data/author";
</script>

<style></style>
