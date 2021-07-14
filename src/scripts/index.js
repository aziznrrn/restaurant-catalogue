import 'regenerator-runtime'
import '../styles/main.scss'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from '../scripts/views/app'
import swRegister from './utils/sw-register'

const app = new App({
  btnMenu: document.querySelector('#btn-menu'),
  drawer: document.querySelector('.app-bar__nav'),
  content: document.querySelector('#content > .container'),
  navLinks: document.querySelectorAll('.nav-link'),
  btnClose: document.querySelector('#btn-close')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
