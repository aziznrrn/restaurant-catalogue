class ReviewList extends HTMLElement {
  init (reviews) {
    this._reviews = reviews
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._reviews.forEach((review) => {
      const element = document.createElement('div')
      element.classList.add('review-card')
      element.innerHTML = `
        <span class="review-card__title">
          <h4>${review.name}</h4>
          <small>${review.date}</small>
        </span>
        <p>${review.review}</p>
      `
      this.appendChild(element)
    })
  }
}

customElements.define('review-list', ReviewList)
