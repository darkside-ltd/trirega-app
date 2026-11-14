import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './helpers'
import './assets/tailwind.css'
import titleMixin from './mixins/titleMixin'
import InstantSearch from 'vue-instantsearch/vue3/es';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InstantSearch)
app.mixin(titleMixin)

app.mount('#app')
