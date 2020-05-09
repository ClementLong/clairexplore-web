import Vue from 'vue'

// Root
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Logo', Logo)

// Content
import contents from './contents'

Vue.component('Video', contents.Video)

// Content - Images

// Content - Polaroids

// Content - Texts
