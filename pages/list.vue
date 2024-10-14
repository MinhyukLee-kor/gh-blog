<template>
  <div>
    <h1>블로그 목록</h1>
    <div v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`/posts/${post.slug}`">
        <h2>{{ post.title }}</h2>
      </nuxt-link>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const posts = await $content('posts').fetch();
    return {posts};
  }
}
</script>
