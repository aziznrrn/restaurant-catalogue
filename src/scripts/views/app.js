import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'

class App {
  constructor ({ btnMenu, drawer, content, navLinks, btnClose }) {
    this._btnMenu = btnMenu
    this._drawer = drawer
    this._content = content
    this._btnClose = btnClose
    this._navLinks = navLinks

    this._initAppShell()
  }

  _initAppShell () {
    DrawerInitiator.init({
      btnMenu: this._btnMenu,
      drawer: this._drawer,
      navLinks: this._navLinks,
      btnClose: this._btnClose
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()

    const page = routes[url] || null
    if (page !== null) {
      this._content.innerHTML = await page.render()
      await page.afterRender()
    } else {
      this._content.innerHTML = `
        <div style="margin-top: 30vh">
          <span style="text-align: center; line-height: 2">
            <h2><b>404 Not Found</b></h2>
            <a href="#/home">
              <button class="back-to-home"><b>Back To Home Page</b></button>
            </a>
          </span>
        </div>
      `
    }
  }
}

export default App
