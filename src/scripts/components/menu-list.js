class MenuList extends HTMLElement {
  init (menus) {
    this._menus = menus
    this.render()
  }

  render () {
    const drinks = document.createElement('ul')
    this._menus.drinks.forEach(menu => {
      const element = document.createElement('li')
      element.textContent = menu.name
      drinks.appendChild(element)
    })

    const foods = document.createElement('ul')
    this._menus.foods.forEach(menu => {
      const element = document.createElement('li')
      element.textContent = menu.name
      foods.appendChild(element)
    })
    this.innerHTML = ''
    this.appendChild(foods)
    this.appendChild(drinks)
  }
}

customElements.define('menu-list', MenuList)
