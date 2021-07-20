import FavoriteBtnPresenter from '../../src/scripts/utils/favorite-btn-presenter'
import FavoriteRestaurant from '../../src/scripts/data/favorite-restaurant'

const createFavBtnPresenterWithRestaurant = async (restaurant) => {
  await FavoriteBtnPresenter.init({
    favBtnContainer: document.querySelector('#favBtnContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant
  })
}

export { createFavBtnPresenterWithRestaurant }
