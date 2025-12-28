import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Upload from '../pages/Upload.vue'
import DeleteRestore from '../pages/DeleteRestore.vue'
import EditContent from '../pages/EditContent.vue'
import Versions from '../pages/Versions.vue'
import Audit from '../pages/Audit.vue'
import Records from '../pages/Records.vue'
import AIChat from '../pages/AIChat.vue'

export default createRouter({
  history: createWebHistory('/document-management/'),
  routes: [
    { path: '/', component: Home },
    { path: '/upload', component: Upload },
    { path: '/delete', component: DeleteRestore },
    { path: '/edit', component: EditContent },
    { path: '/versions', component: Versions },
    { path: '/audit', component: Audit },
    { path: '/records', component: Records },
    { path: '/ai', component: AIChat }
  ]
})
