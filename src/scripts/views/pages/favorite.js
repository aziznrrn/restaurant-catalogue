import FavoriteRestaurant from '../../utils/favorite-restaurant'

const Favorite = {
  async render () {
    return `
      <div class="page-header">
        <h2>Your Favorite Restaurant</h2>
      </div>
      <restaurant-list></restaurant-list>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurant.getAllRestaurants()
    const restaurantList = document.querySelector('restaurant-list')
    restaurantList.init(restaurants)
  }
}

export default Favorite
