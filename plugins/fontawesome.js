import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import {
  faAngleDown,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash, faAngleDown, faChevronUp, faChevronDown)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
