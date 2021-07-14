import FavoriteRestaurant from './favorite-restaurant'
import { createAddToFavBtn, createRemoveFromFavBtn } from '../views/templates/template-fav-btn'

const FavoriteBtnInitiator = {
  async init ({ favBtnContainer, restaurant }) {
    this._favBtnContainer = favBtnContainer
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
    this._favBtnContainer.innerHTML = createAddToFavBtn();
    document.querySelector('#favorite-btn').addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorited () {
    this._favBtnContainer.innerHTML = createRemoveFromFavBtn()
    document.querySelector('#favorite-btn').addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteBtnInitiator
