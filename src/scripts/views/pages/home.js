import '../../components/restaurant-list'
import DataSource from '../../data/data-source'

const Home = {
  async render () {
    return `
      <div class="jumbotron">
        <div class="banner">
          <picture>
            <source media="(max-width: 420px)" srcset="/images/hero_small.webp"
                    style="width: 100%; height: 100%; object-fit: cover">
            <source media="(max-width: 420px)" srcset="/images/hero_small.jpg"
                    style="width: 100%; height: 100%; object-fit: cover">
            <source media="(max-width: 800px)" srcset="/images/hero_medium.webp"
                    style="width: 100%; height: 100%; object-fit: cover">
            <source media="(max-width: 800px)" srcset="/images/hero_medium.webp"
                    style="width: 100%; height: 100%; object-fit: cover">
            <source srcset="/images/hero.webp"
                    style="width: 100%; height: 100%; object-fit: cover">
            <img src="/images/hero.jpg" alt="banner"
                    style="width: 100%; height: 100%; object-fit: cover">
          </picture>
        </div>
        <h1 class="jumbotron__text">
          Eat Well, <em>Live Well</em>
        </h1>
      </div>
      <div class="page-header">
        <h2>Our Partners</h2>
      </div>
      <restaurant-list></restaurant-list>
    `
  },

  async afterRender () {
    const restaurants = await DataSource.list()
    const restaurantList = document.querySelector('restaurant-list')
    restaurantList.init(restaurants)
  }
}

export default Home
