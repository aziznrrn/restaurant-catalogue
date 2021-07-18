import FavoriteRestaurant from '../../data/favorite-restaurant'

const Favorite = {
  async render () {
    return `
      <div class="page-header">
        <h2>Your Favorite Restaurant</h2>
      </div>
      <restaurant-list></restaurant-list>
    `
  },

  messageEmptyList () {
    const message = document.createElement('div')
    message.style.marginTop = '7.65rem'
    message.innerHTML = `
      <span style="text-align: center; line-height: 2">
        <h3><b>Empty Favorite List</b></h3>
        <p>Your favorite restaurants will appear here</p>
      </span>
    `

    return message
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurant.getAllRestaurants()
    const restaurantList = document.querySelector('restaurant-list')
    restaurantList.init(restaurants)

    if (restaurants.length === 0) {
      document.querySelector('.page-header')
        .parentElement.append(this.messageEmptyList())
    }
  }
}

export default Favorite
