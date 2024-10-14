<template>
  <div class="layout-container">
    <!-- 헤더 영역 -->
    <header class="header">
      <h1>My Nuxt Blog</h1>
    </header>

    <!-- 본문 영역 -->
    <div class="main-container">
      <!-- 좌측 메뉴 영역 -->
      <aside class="sidebar">
        <nav>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/posts">Blog</nuxt-link></li>
            <li><nuxt-link to="/introduce">Introduce</nuxt-link></li>
          </ul>
        </nav>
      </aside>

      <!-- 콘텐츠 영역 -->
      <main class="content">
        <nuxt />
      </main>
    </div>

    <!-- 푸터 영역 -->
    <footer class="footer">
      <p>&copy; 2023 My Nuxt Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

.main-container {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 10px;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: #333;
}

.sidebar nav ul li a:hover {
  color: #007bff;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-align: center;
}
</style>
