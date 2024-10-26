<template>
  <div>
    <main id="main" class="bg-slate-50 dark:bg-gray-800">
      <BackButton />
      <article class="py-16 px-6 sm:px-8">
        <header class="flex flex-col items-center">
          <p class="text-gray-700 font-semibold tracking-wide dark:text-white">
            {{ formatDate(page.date) }}
          </p>
          <h1
            class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
          >
            {{ page.title }}
          </h1>

          <!-- 작성자 이름 표시 (링크 여부 조건) -->
          <template v-if="page.authorURL">
            <a
              class="mt-2 text-gray-900 font-semibold tracking-wide hover:underline dark:text-white"
              :href="page.authorURL"
            >{{ page.author }}</a>
          </template>
          <template v-else>
            <p class="mt-2 text-gray-900 font-semibold tracking-wide dark:text-white">
              {{ page.author }}
            </p>
          </template>

          <hr class="mt-8 border-t-2 w-20 mx-auto" />
          <img
            class="object-cover sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto"
            :src="page.image"
            :alt="page.alt"
            loading="lazy"
          />
        </header>
        <div
          class="mt-8 prose prose-slate mx-auto lg:prose-lg dark:prose-invert prose-img:rounded-2xl prose-img:shadow-md"
        >
          <nuxt-content :document="page" />
        </div>
      </article>
      <BlogFooter />
    </main>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BackButton from "@/components/BackButton.vue";
import BlogFooter from "@/components/BlogFooter.vue"

export default defineComponent({
  components: { BackButton, BlogFooter },
  async asyncData({ $content, params }) {
    const page = await $content('blog', params.slug).fetch();
    return { page };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('ko-KR', options);
    },
  }
});
</script>
