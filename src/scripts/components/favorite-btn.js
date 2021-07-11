class FavoriteBtn extends HTMLElement {
  set isFavorited (value) {
    this._isFavorited = value
    this._likeIcon()
    this.render()
  }

  get isFavorited () {
    return this._isFavorited
  }

  _likeIcon () {
    (this._isFavorited === true)
      ? this._icon = 'fa fa-heart'
      : this._icon = 'fa fa-heart-o'
  }

  render () {
    this.innerHTML = `
      <button aria-label="favorite this restaurant">
          <i class="${this._icon}" aria-hidden="true"></i>
      </button>
    `
  }
}

customElements.define('favorite-btn', FavoriteBtn)
