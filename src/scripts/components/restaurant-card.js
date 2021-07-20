import CONFIG from '../globals/config'

class RestaurantCard extends HTMLElement {
  init (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
      <a href="/#/detail/${this._restaurant.id}" class="restaurant-card">
        <span class="restaurant-card__rating">
          ${this._restaurant.rating.toFixed(1)}
        </span>
        <div class="restaurant-card__img">
          <img data-src="${CONFIG.BASE_IMG}small/${this._restaurant.pictureId}"
              alt="picture of ${this._restaurant.name}" class="lazyload"
              style="width: 100%; height: 100%; object-fit: cover">
        </div>
        <div class="restaurant-card__text">
          <div class="restaurant-card__title">
            <h2>${this._restaurant.name}</h2>
            <small>${this._restaurant.city}</small>
          </div>
          <p class="restaurant-card__desc">
            ${this._restaurant.description.substr(0, 128)}...
          </p>
        </div>
      </a>
    `
  }
}

customElements.define('restaurant-card', RestaurantCard)
