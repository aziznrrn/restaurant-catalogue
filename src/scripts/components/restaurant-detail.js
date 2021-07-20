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
      <div class="banner">
        <picture>
          <source media=(max-width: 420px) srcset="${CONFIG.BASE_IMG}small/${this._restaurant.pictureId}"
                  style="width: 100%; height: 100%; object-fit: cover">
          <source media=(max-width: 800px) srcset="${CONFIG.BASE_IMG}medium/${this._restaurant.pictureId}"
                  style="width: 100%; height: 100%; object-fit: cover">
          <img src="${CONFIG.BASE_IMG}large/${this._restaurant.pictureId}"
                  style="width: 100%; height: 100%; object-fit: cover">
        </picture>
      </div>
      <div class="restaurant-detail__info">
          <h3 class="page-subheader">Description</h3>
          <div class="restaurant-detail__description">
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
