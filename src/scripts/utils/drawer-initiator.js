const DrawerInitiator = {
  init ({ btnMenu, drawer, navLinks, btnClose }) {
    btnMenu.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    btnClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer)
      })
    })
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('active')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('active')
  }
}

export default DrawerInitiator
