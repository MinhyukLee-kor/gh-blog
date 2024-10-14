<template>
  <div>
    <h2>Blog Posts</h2>
    <div class="postCard" v-for="post in posts" :key="post.slug">
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
  color: #4d4d4d;
}

h3 {
  color: #4d4d4d;
}

p {
  font-size: 1em;
}

.postCard {
  margin: 15px;
  padding: 10px;
  border: 1.5px solid #a09f9f;
  border-radius: 10px;
}
</style>
