<template>
  <div>
    <h2>Blog Posts</h2>
    <div v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`/posts/${post.slug}`">
        <h3>{{ post.title }}</h3>
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

<style scoped>
h2 {
  color: #007bff;
}

h3 {
  color: #333;
}

p {
  font-size: 1em;
}
</style>
