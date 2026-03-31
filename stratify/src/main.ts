import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import './style.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { RiEdit2Fill} from 'oh-vue-icons/icons'
import { MdDeleteforever } from "oh-vue-icons/icons";




addIcons(RiEdit2Fill, MdDeleteforever)
const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)

app.mount("#app")