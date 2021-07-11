import FavoriteRestaurant from './favorite-restaurant'
import '../components/favorite-btn'

const FavoriteBtnInitiator = {
  async init ({ favoriteBtn, restaurant }) {
    this._favoriteBtn = favoriteBtn
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant
    if (await this._isRestaurantExist(id)) this._renderFavorited()
    else this._renderFavorite()
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite () {
    this._favoriteBtn.isFavorited = false
    this._favoriteBtn.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorited () {
    this._favoriteBtn.isFavorited = true
    this._favoriteBtn.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteBtnInitiator
