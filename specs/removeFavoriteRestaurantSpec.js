import * as TestFactories from './helpers/testFactories'
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant'

const addFavBtnContainer = () => {
  document.body.innerHTML = '<div id="favBtnContainer"></div>'
}

describe('Remove a restaurant from Favorite', () => {
  beforeEach(async () => {
    addFavBtnContainer()
    await FavoriteRestaurant.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1)
  })

  it('should display remove from favorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy()
  })

  it('should not display add to favorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy()
  })

  it('should be able to remove restaurant from favorite list', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    document.querySelector('#favorite-btn').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the restaurant is not in the list', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    await FavoriteRestaurant.deleteRestaurant(1)

    document.querySelector('#favorite-btn').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurants()).toBeLessThanOrEqual([])
  })
})
