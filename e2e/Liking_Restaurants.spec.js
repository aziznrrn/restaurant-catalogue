const assert = require('assert')

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', async ({ I }) => {
  // check if message displayed
  I.see('Empty Favorite List', 'b')
  I.see('Your favorite restaurants will appear here', 'p')

  // move to root/home page
  I.amOnPage('/')

  // look for restaurant-card
  I.seeElement('a.restaurant-card')

  // save the first restaurant & its title as variable
  const firstRestaurant = locate('a.restaurant-card').first()
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-card__title > h2')

  // click the first restaurant card
  I.click(firstRestaurant)

  // look for favorite-btn, then click it
  I.seeElement('#favorite-btn')
  I.click('#favorite-btn')

  // move to favorite page, then check if any restaurant-card exist
  I.amOnPage('/#/favorite')
  I.seeElement('a.restaurant-card')

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-card__title > h2')

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle)
})
