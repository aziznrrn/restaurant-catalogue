import '../../components/restaurant-list'
import DataSource from '../../data/data-source'

const Home = {
  async render () {
    return `
      <div class="jumbotron">
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
