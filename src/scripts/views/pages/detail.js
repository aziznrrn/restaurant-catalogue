import '../../components/restaurant-detail'
import UrlParser from '../../routes/url-parser'
import DataSource from '../../data/data-source'
import FavoriteBtnPresenter from '../../utils/favorite-btn-presenter'
import FavoriteRestaurant from '../../data/favorite-restaurant'

const Detail = {
  async render () {
    return `
      <restaurant-detail></restaurant-detail>
      <div id="favBtnContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DataSource.detail(url.id)
    const restaurantDetail = document.querySelector('restaurant-detail')
    restaurantDetail.init(restaurant)

    FavoriteBtnPresenter.init({
      favBtnContainer: document.querySelector('#favBtnContainer'),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description,
        rating: restaurant.rating,
        menus: restaurant.menus,
        categories: restaurant.categories,
        pictureId: restaurant.pictureId
      }
    })
  }
}

export default Detail
