import Vue from 'vue'

// Root
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import Search from './Search'
import Social from './Social'
import WorldMap from './WorldMap'

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Logo', Logo)
Vue.component('Search', Search)
Vue.component('Social', Social)
Vue.component('WorldMap', WorldMap)

// Pages
import pages from './pages'

Vue.component('ArticleHeader', pages.ArticleHeader)

// Contents
import contents from './contents'

Vue.component('Video', contents.Video)
Vue.component('Map', contents.Map)
Vue.component('Slider', contents.Slider)
Vue.component('Divider', contents.Divider)

// Content - Images
Vue.component('Single', contents.images.Single)
Vue.component('Duo', contents.images.Duo)
Vue.component('Double', contents.images.Double)
Vue.component('Cover', contents.images.Cover)
Vue.component('Scotch', contents.images.Scotch)
Vue.component('MixedTextImage', contents.images.MixedTextImage)

// Content - Polaroids
Vue.component('PolaSingle', contents.polaroids.Single)
Vue.component('PolaDuo', contents.polaroids.Duo)
Vue.component('PolaTrio', contents.polaroids.Trio)
Vue.component('MixedTextPolaroid', contents.polaroids.MixedTextPolaroid)

// Content - Texts
Vue.component('Paragraph', contents.texts.Paragraph)
Vue.component('Collapsible', contents.texts.Collapsible)
Vue.component('Subtitle', contents.texts.Subtitle)
Vue.component('Title', contents.texts.Title)
Vue.component('Tips', contents.texts.Tips)
