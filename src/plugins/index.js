/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueFire, {
      firebaseApp,
      modules: [
        VueFireAuth
      ]
    })
}
