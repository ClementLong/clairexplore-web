import Vue from 'vue'

// Root
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import Search from './Search'
import Social from './Social'
import WorldMap from './WorldMap'
import ArticlePreview from './ArticlePreview'
import Share from './Share'

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Logo', Logo)
Vue.component('Search', Search)
Vue.component('Social', Social)
Vue.component('WorldMap', WorldMap)
Vue.component('ArticlePreview', ArticlePreview)
Vue.component('Share', Share)

// Pages
import pages from './pages'

Vue.component('ArticleHeader', pages.ArticleHeader)
Vue.component('ArticleFooter', pages.ArticleFooter)
Vue.component('Presentation', pages.Presentation)
Vue.component('ArticleLast', pages.ArticleLast)
Vue.component('ArticleByCountry', pages.ArticleByCountry)
Vue.component('SearchResult', pages.SearchResult)
Vue.component('Instagram', pages.Instagram)
Vue.component('ArticleFilter', pages.ArticleFilter)
Vue.component('ArticleFilterButton', pages.ArticleFilterButton)
Vue.component('ArticleByCategory', pages.ArticleByCategory)

// UI Kit
import uiKit from './ui-kit'

Vue.component('Button', uiKit.Button)
Vue.component('Photo', uiKit.Photo)

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
Vue.component('Scotch', contents.images.Scotch)
Vue.component('MixedTextImage', contents.images.MixedTextImage)

// Content - Polaroids
Vue.component('Pola', contents.polaroids.Pola)
Vue.component('MixedTextPolaroid', contents.polaroids.MixedTextPolaroid)

// Content - Texts
Vue.component('Paragraph', contents.texts.Paragraph)
Vue.component('Collapsible', contents.texts.Collapsible)
Vue.component('Title', contents.texts.Title)
Vue.component('Tips', contents.texts.Tips)
