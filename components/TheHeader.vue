<template>
  <nav class="mx-auto sticky top-0 z-50">
    <div
      class="bg-yellow-400 text-white flex flex-col md:flex-row items-center justify-between px-10 md:py-4 py-2 overflow-hidden font-2xl sm:px-4 md:overflow-visible md:px-2"
    >
      <!-- 왼쪽: 제목 섹션 -->
      <div class="flex-1 flex justify-start">
        <NuxtLink
          to="/"
          class="text-white font-bold text-2xl no-underline"
        >
          <span class="text-white">민혀꾸 개발놀이터</span>
        </NuxtLink>
      </div>

      <!-- 가운데: 내비게이션 섹션 -->
      <div class="flex-1 flex justify-center">
        <ul class="flex list-reset m-0">
          <li v-for="item in navLinks" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- 오른쪽: 공백 섹션 -->
      <div class="flex-1"></div>
    </div>
  </nav>

</template>

<script>
import menu from "../data/menu";

export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: menu,
    };
  },
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-gray-700;
}
</style>
