import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant'
import * as TestFactories from './helpers/testFactories'

describe('Favorite a Restaurant', () => {
  const addFavBtnContainer = () => {
    document.body.innerHTML = '<div id="favBtnContainer"></div>'
  }

  beforeEach(() => {
    addFavBtnContainer()
  })

  it('should show the star button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy()
  })

  it('should not show the unstar button when then restaurant has not been favorited before', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy()
  })

  it('should be able to add restaurant to favorite', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    document.querySelector('#favorite-btn').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurant.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurant.deleteRestaurant(1)
  })

  // skenario negatif
  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({ id: 1 })

    // add restarant with id 1 to favorite
    await FavoriteRestaurant.putRestaurant({ id: 1 })

    document.querySelector('#favorite-btn').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }])

    FavoriteRestaurant.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavBtnPresenterWithRestaurant({})

    document.querySelector('#favorite-btn').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([])
  })
})
