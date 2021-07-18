import FavoriteBtnPresenter from '../../src/scripts/utils/favorite-btn-presenter'

const createFavBtnPresenterWithRestaurant = async (restaurant) => {
  await FavoriteBtnPresenter.init({
    favBtnContainer: document.querySelector('#favBtnContainer'),
    restaurant
  })
}

export { createFavBtnPresenterWithRestaurant }
