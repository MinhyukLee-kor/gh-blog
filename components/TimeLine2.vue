<template>
  <div class="opacity-100 mt-10">
    <button
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
      @click="requestPassword"
    >
      <span class="text-yellow-400">{{isOpen ? "▼ ":"▶ "}}</span>Project</button>
    <!-- 비밀번호 입력 화면 -->
    <div v-if="showPasswordInput" class="mt-4">
      <input
        v-model="passwordInput"
        type="password"
        placeholder="비밀번호 입력"
        class="p-2 border-4 border-yellow-400 rounded-md focus:outline-none"
      />
      <button @click="verifyPassword" class="ml-2 p-2 bg-yellow-400 text-white rounded-md focus:outline-red-500">
        확인
      </button>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    </div>
    <transition name="slide">
      <ol class="ml-3 mt-10 relative border-l border-gray-200 dark:border-gray-700"
        v-show="isOpen"
      >
        <li v-for="time in timeline" class="mb-2 ml-6">
          <span
            class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-400 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
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
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ time.description }}
          </p>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {{ time.skill }}
          </p>
        </li>
      </ol>
    </transition>
  </div>
</template>

<script setup>
import author from "@/data/author.js";
import { ref } from "vue";

const timeline = author.timeline2;
const isOpen = ref(false);
const showPasswordInput = ref(false);
const passwordInput = ref("");
const errorMessage = ref("");
const correctPassword = "240322"; // 비밀번호를 이곳에 설정
const isPass = ref(false);

// 드롭다운 열림/닫힘을 토글하는 함수
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const requestPassword = () => {
  if(!isOpen.value && !isPass.value) {
    showPasswordInput.value = true;
  } else {
    isOpen.value = !isOpen.value;
  }
}

const verifyPassword = () => {
  if (passwordInput.value === correctPassword) {
    errorMessage.value = "";
    isOpen.value = true;
    isPass.value = true;
    showPasswordInput.value = false;
  } else {
    errorMessage.value = "비밀번호가 틀렸습니다.";
  }
}
</script>

<style>
/* 슬라이드 애니메이션 정의 */
.slide-enter-active {
  transition: all 1s ease;
}

.slide-enter, .slide-leave-to /* .slide-leave-active에서 .slide-leave-to로 변경 */ {
  height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-enter-to, .slide-leave {
  height: auto;
  opacity: 1;
}
</style>
