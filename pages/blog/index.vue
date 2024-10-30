<template>
  <div class="container mx-auto py-8 dark:bg-gray-800 flex">
    <!-- 좌측 카테고리 네비게이션 -->
    <aside class="w-1/5 dark:bg-gray-800">
<!--      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-5">카테고리</h1>-->
      <ul class="flex flex-wrap gap-2 md:block md:space-y-3">
        <li
          @click="clearCategory"
          :class="{
      'cursor-pointer px-3 py-1 text-sm md:px-4 md:py-2 block font-bold rounded transition hover:bg-gray-500 dark:text-white': true,
      'bg-gray-600 text-white': selectedCategory === null
    }"
        >
          전체
        </li>
        <li
          v-for="category in allCategories"
          :key="category"
          @click="selectCategory(category)"
          :class="{
      'cursor-pointer px-3 py-1 text-sm md:px-4 md:py-2 block font-bold rounded transition text-gray-900 hover:bg-yellow-500 dark:text-white': true,
      'bg-yellow-400 text-white': selectedCategory === category
    }"
        >
          {{ category }}
        </li>
      </ul>

    </aside>

    <!-- 메인 컨텐츠 -->
    <div class="w-4/5 mr-3">
      <!-- 제목과 다크모드 토글 버튼 -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white ml-5">Posts</h1>
      </div>

      <!-- 태그 필터를 Chips 형태로 표시 (다중 선택) -->
      <div class="flex flex-wrap mb-6 ml-5">
        <!-- '모든 태그' 선택 -->
        <span
          @click="clearTags"
          :class="{
            'bg-gray-700 text-white px-4 py-2 text-center text-xs font-bold rounded-full cursor-pointer transition hover:bg-gray-500 mb-3 mr-2 flex-grow-0': true,
            'bg-gray-600': selectedTags.length === 0
          }"
        >
          모든 태그
        </span>
        <!-- 각 태그 Chips -->
        <span
          v-for="tag in filteredTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="{
            'bg-yellow-400 px-4 py-2 text-center text-xs font-bold rounded-full cursor-pointer mb-3 mr-2 flex-grow-0': true,
            'bg-yellow-600': selectedTags.includes(tag)
          }"
          class="transition hover:bg-yellow-500"
        >
          {{ tag }}
        </span>
      </div>

      <!-- 게시글 목록 (최소 높이 유지) -->
      <div class="post-list min-h-screen mb-10">
        <div v-for="post in paginatedPosts" :key="post.slug" class="mb-10">
          <hr class="py-2 mt-8 border-t-2 w-20 mx-auto" />
          <article class="flex flex-col sm:flex-row bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25">
            <!-- 이미지 섹션 (이미지를 article 높이에 맞게 설정) -->
            <div class="w-full sm:w-56 h-64 sm:h-auto">
              <img :src="post.image" :alt="post.alt" class="h-full w-full object-cover" />
            </div>

            <!-- 포스트 내용 -->
            <div class="flex flex-1 flex-col justify-between">
              <div class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
                <NuxtLink :to="`/blog/${post.slug}`">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ post.title }}</h3>
                </NuxtLink>
                <time :datetime="post.date" class="text-xs font-bold uppercase text-gray-900 dark:text-white">
                  {{ formatDate(post.date) }}
                </time>
                <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200">{{ post.description }}</p>
              </div>

              <div class="sm:flex sm:items-end sm:justify-end">
                <NuxtLink :to="`/blog/${post.slug}`" class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500">
                  Read Blog
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- 페이징 처리 -->
      <div class="flex justify-between items-center mt-6">
        <div>
          <span class="text-gray-900 dark:text-white font-bold">Page {{ currentPage }} of {{ totalPages }}</span>
        </div>
        <div class="flex space-x-4">
          <button @click="prevPage" class="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-bold hover:bg-yellow-500">
            이전
          </button>
          <button @click="nextPage" class="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-bold hover:bg-yellow-500">
            다음
          </button>
        </div>
      </div>

      <!-- 페이지 번호 리스트 -->
      <div class="flex justify-center items-center mt-4 space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToSpecificPage(page)"
          :class="{
            'bg-yellow-500 text-white': currentPage === page,
            'bg-yellow-400 text-gray-900': currentPage !== page
          }"
          class="px-3 py-2 rounded-md font-bold hover:bg-yellow-500"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [], // 모든 게시글 데이터
      filteredPosts: [], // 필터링된 게시글
      paginatedPosts: [], // 페이징된 게시글
      selectedTags: [], // 선택된 태그들
      selectedCategory: null, // 선택된 카테고리
      sortOrder: 'desc', // 정렬 순서
      allTags: [], // 태그 목록
      allCategories: [], // 카테고리 목록
      currentPage: 1, // 현재 페이지 번호
      postsPerPage: 3, // 페이지당 게시글 수
    };
  },

  async asyncData({$content}) {
    const posts = await $content('blog')
      .sortBy('date', 'desc')
      .where({draft: {$ne: true}})
      .fetch();

    const allTags = [...new Set(posts.flatMap(post => post.tags))];
    const allCategories = [...new Set(posts.map(post => post.category))];

    return {posts, allTags, allCategories};
  },

  mounted() {
    this.filterPosts();
  },

  computed: {
    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    },

    filteredTags() {
      if (this.selectedCategory) {
        return [...new Set(this.posts
          .filter(post => post.category === this.selectedCategory)
          .flatMap(post => post.tags))];
      }
      return this.allTags;
    },
  },

  methods: {
    filterPosts() {
      if (this.selectedCategory) {
        this.filteredPosts = this.posts.filter(post => post.category === this.selectedCategory);
      } else {
        this.filteredPosts = this.posts;
      }

      if (this.selectedTags.length) {
        this.filteredPosts = this.filteredPosts.filter(post =>
          this.selectedTags.every(tag => post.tags.includes(tag))
        );
      }
      this.currentPage = 1;
      this.sortPosts();
    },

    selectCategory(category) {
      this.selectedCategory = category;
      this.clearTags();
      this.filterPosts();
    },

    clearCategory() {
      this.selectedCategory = null;
      this.clearTags();
      this.filterPosts();
    },

    sortPosts() {
      this.filteredPosts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return this.sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
      });
      this.paginatePosts();
    },

    paginatePosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      this.paginatedPosts = this.filteredPosts.slice(start, end);
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginatePosts();
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.paginatePosts();
      }
    },

    goToSpecificPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.paginatePosts();
      }
    },

    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(date).toLocaleDateString('ko-KR', options);
    },

    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
      this.filterPosts();
    },

    clearTags() {
      this.selectedTags = [];
      this.filterPosts();
    },
  },
};
</script>

<style scoped>
.post-list {
  min-height: 70vh;
}

h1 {
  color: #4d4d4d;
  text-align: center;
}

article img {
  object-fit: cover;
  height: 100%;
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

span {
  flex-grow: 0;
}
</style>
