<template>
  <div>
    <nuxt-link to="/posts">목록으로 돌아가기</nuxt-link>
    <article>
      <h1>{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();
    return { post };
  }
}
</script>
