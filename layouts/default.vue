<template>
  <div class="layout-container">
    <!-- 헤더 영역 -->
    <header class="header">
      <div>미녁꾸's 개발놀이터</div>
    </header>

    <!-- 본문 영역 -->
    <div class="main-container">
      <!-- 좌측 메뉴 영역 -->
      <aside class="sidebar">
        <nav>
          <!-- 사용자 정보 섹션 -->
          <div class="user-info">
            <img src="/gh-blog/favicon.ico" alt="Profile Image" class="profile-image" />
            <div class="user-name">미녁꾸</div>
            <div>3년차 웹 개발자</div>
          </div>
          <ul>
            <li>
              <nuxt-link to="/">
                <i class="fas fa-home icon"></i>
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/posts">
                <i class="fas fa-blog icon"></i>
                Blog
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/introduce">
                <i class="fas fa-user icon"></i>
                Introduce
              </nuxt-link>
            </li>
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
      <p>&copy; 2024.10.14</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-100: #FFD700;
  --primary-200: #FFEB3B;
  --primary-300: #FBC02D;
  --accent-100: #C0C0C0;
  --accent-200: #9E9E9E;
  --text-100: #333333;
  --text-200: #5c5c5c;
  --bg-100: #F7F7F7;
  --bg-200: #ffffff;
  --bg-300: #c4c4c4;
}

/* 기본 초기화 스타일 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

/* 전체 레이아웃 스타일 */
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-100);
}

/* 헤더 스타일 */
.header {
  background-color: var(--primary-100);
  color: #4d4d4d;
  padding: 14px;
  text-align: left; /* 좌측 정렬 */
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.5em; /* 글자 크기를 조금 작게 변경 */
}


/* 본문 영역 스타일 */
.main-container {
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
}

/* 사이드바 스타일 */
.sidebar {
  width: 250px;
  background-color: var(--bg-200);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 20px;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: var(--text-100);
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px;
  border-radius: 8px;
}

.sidebar nav ul li a:hover {
  background-color: var(--primary-300);
  color: var(--bg-100);
}

/* 아이콘 스타일 */
.icon {
  color: var(--primary-100);
  margin-right: 10px;
  font-size: 1.5em;
}

/* 콘텐츠 영역 스타일 */
.content {
  flex: 1;
  padding: 20px;
  background-color: var(--bg-200);
  color: var(--text-100);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 푸터 스타일 */
.footer {
  background-color: var(--primary-100);
  color: #4d4d4d;
  padding: 10px;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}
/* 사용자 정보 섹션 스타일 */
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.user-name {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--text-100);
}

::selection {
  background-color: #FFD700; /* 노란색 배경 */
  color: white; /* 빨간색 글자 */
}
</style>

<script>
// FontAwesome 로드
export default {
  mounted() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
    document.head.appendChild(link);
  }
}
</script>
