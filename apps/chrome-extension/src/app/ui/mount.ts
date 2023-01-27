import { createApp } from 'vue'
import App from './ui/App.vue'

import { withi18n } from './providers/withi18n'
import { withRouter } from './providers/withRouter'
import VueSanitize from 'vue-3-sanitize'
// import { withVueConfig } from './providers/withVueConfig'

import './styles/tailwind.scss'

export const mountUI = async () => {
  const { i18n } = withi18n()
  const { router } = withRouter()

  const app = createApp(App)
  app.use(i18n)
  app.use(router)
  app.use(VueSanitize)

  app.mount('#app')
}
