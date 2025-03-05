import { createApp } from 'vue'
import App from './App.vue'
import Country from './components/Country.vue'
import CommentForm from './components/CommentForm.vue'
import ImageGallery from './components/ImageGallery.vue'


const app = createApp(App)
app.component('country', Country)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('ImageGallery', ImageGallery)
app.mount('#app')