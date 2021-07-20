import { createAddToFavBtn, createRemoveFromFavBtn } from '../views/templates/template-fav-btn'

const FavoriteBtnPresenter = {
  async init ({ favBtnContainer, favoriteRestaurant, restaurant }) {
    this._favBtnContainer = favBtnContainer
    this._favoriteRestaurant = favoriteRestaurant
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant
    if (await this._isRestaurantExist(id)) this._renderFavorited()
    else this._renderFavorite()
  },

  async _isRestaurantExist (id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite () {
    this._favBtnContainer.innerHTML = createAddToFavBtn()
    document.querySelector('#favorite-btn').addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorited () {
    this._favBtnContainer.innerHTML = createRemoveFromFavBtn()
    document.querySelector('#favorite-btn').addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteBtnPresenter
