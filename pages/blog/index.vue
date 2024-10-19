<template>
  <div class="container mx-auto py-8 dark:bg-gray-800">
    <!-- 제목과 다크모드 토글 버튼 -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white ml-5">Posts</h1>
    </div>

    <div v-for="post in posts" :key="post.slug" class="mb-10">
      <hr class="py-2 mt-8 border-t-2 w-20 mx-auto" />
      <article
        class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
      >
        <!-- 이미지 섹션 -->
        <div class="hidden sm:block sm:basis-56">
          <img
            :src="post.heroImage"
            :alt="post.alt"
            class="aspect-auto h-full w-full object-cover"
          />
        </div>

        <!-- 포스트 내용 -->
        <div class="flex flex-1 flex-col justify-between">
          <div
            class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
          >
            <NuxtLink :to="`/blog/${post.slug}`">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ post.title }}
              </h3>
            </NuxtLink>
            <time
              :datetime="post.publishDate"
              class="text-xs font-bold uppercase text-gray-900 dark:text-white"
            >
              {{ post.publishDate }}
            </time>
            <p
              class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
            >
              {{ post.description }}
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Read Blog
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch();
    return { posts };
  },

  methods: {
    toggleDarkMode() {
      this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark';
    }
  }
}
</script>

<style scoped>
h1 {
  color: #4d4d4d;
  text-align: center;
}

article {
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

article:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button {
  cursor: pointer;
}
</style>
