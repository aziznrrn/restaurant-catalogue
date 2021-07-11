import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async list () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default DataSource
