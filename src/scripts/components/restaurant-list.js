import './restaurant-card'
class RestaurantList extends HTMLElement {
  init (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card')
      restaurantCard.init(restaurant)
      this.appendChild(restaurantCard)
    })
  }
}

customElements.define('restaurant-list', RestaurantList)
