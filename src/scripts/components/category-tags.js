class CategoryTags extends HTMLElement {
  init (categories) {
    this._categories = categories
    this.render()
  }

  render () {
    this._categories.forEach((category) => {
      const tag = document.createElement('p')
      tag.textContent = category.name
      this.appendChild(tag)
    })
  }
}

customElements.define('category-tags', CategoryTags)
