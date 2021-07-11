import CONFIG from '../globals/config'
import './menu-list'
import './category-tags'
import './review-list'

class RestaurantDetail extends HTMLElement {
  init (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="page-header">
      <h2>${this._restaurant.name}</h2>
      <p>${this._restaurant.city}, ${this._restaurant.address}</p>
      <category-tags></category-tags>
    </div>
    <div class="restaurant-detail">
      <span class="restaurant-detail__rating">${this._restaurant.rating.toFixed(1)}</span>
      <div class="restaurant-detail__img"
           style="background-image: url(${CONFIG.BASE_IMG}large/${this._restaurant.pictureId});
                  background-size: cover; background-position: center">
      </div>
      <div class="restaurant-detail__description">
        <div>
          <h3 class="page-subheader">Description</h3>
          <p>${this._restaurant.description}</p>
        </div>
        <div>
          <h3 class="page-subheader">Menus</h3>
          <menu-list><menu-list>
        </div>
        <div>
          <h3 class="page-subheader">Reviews</h3>
          <review-list><review-list>
        </div>
      </div>
    </div>
    `
    this.renderCategories()
  }

  renderCategories () {
    const categorytags = document.querySelector('category-tags')
    const menuList = document.querySelector('menu-list')
    const reviewList = document.querySelector('review-list')
    categorytags.init(this._restaurant.categories)
    menuList.init(this._restaurant.menus)
    reviewList.init(this._restaurant.customerReviews)
  }
}

customElements.define('restaurant-detail', RestaurantDetail)
