import { RouterView, RouterLink } from 'vue-router'

export default {
  setup() {
    return () => (
      <div class="app">
        <nav class="nav">
          <RouterLink to="/">文件清單</RouterLink>
          <RouterLink to="/upload">上傳下載</RouterLink>
          <RouterLink to="/delete">刪除還原</RouterLink>
          <RouterLink to="/edit">編輯內容</RouterLink>
          <RouterLink to="/versions">版本查看</RouterLink>
          <RouterLink to="/audit">稽核紀錄</RouterLink>
          <RouterLink to="/records">行為紀錄</RouterLink>
          <RouterLink to="/ai">AI 問答</RouterLink>
        </nav>

        <main class="content">
          <RouterView />
        </main>
      </div>
    )
  }
}
