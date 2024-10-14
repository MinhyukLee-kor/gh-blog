export default {
  // GitHub Pages에서 정적 사이트로 빌드하는 경우, 타겟을 static으로 설정합니다.
  target: 'static',
  modules: [
    '@nuxt/content'
  ],
  // Router 설정: 서브 디렉토리로 배포될 때 올바른 기본 경로를 설정합니다.
  router: {
    base: '/gh-blog/' // 리포지토리 이름을 기준으로 정확하게 설정
  },

  // Generate 설정: 동적 라우트 처리 문제를 방지하기 위한 fallback 설정
  generate: {
    fallback: true // 404를 처리하고 SPA 라우팅을 지원
  },

  // Build 설정 최적화: 경로 중복을 피하기 위해 publicPath를 제거합니다.
  build: {},

  // Head 설정: 메타 정보와 favicon 설정
  head: {
    title: 'gh-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Nuxt Blog' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/gh-blog/favicon.ico' } // favicon 경로 설정
    ]
  }
};
