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
    message.style.marginTop = '30vh'
    message.innerHTML = `
      <span style="text-align: center; line-height: 2">
        <h2><b>Empty Favorite List</b></h2>
        <p>Your favorite restaurants will appear here</p>
        <a href="#/home">
          <button class="back-to-home"><b>Back To Home Page</b></button>
        </a>
      </span>
    `

    return message
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurant.getAllRestaurants()
    const restaurantList = document.querySelector('restaurant-list')
    restaurantList.init(restaurants)

    if (restaurants.length === 0) {
      const pageHeader = document.querySelector('.page-header')
      pageHeader.parentElement.append(this.messageEmptyList())
      pageHeader.style.display = 'none';
    }
  }
}

export default Favorite
