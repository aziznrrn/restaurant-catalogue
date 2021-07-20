import '../../components/restaurant-list'
const NotFound = {
  async render () {
    return `
      <div style="margin-top: 30vh">
        <span style="text-align: center; line-height: 2">
          <h2><b>404 Not Found</b></h2>
          <a href="#/home">
            <button class="back-to-home"><b>Back To Home Page</b></button>
          </a>
        </span>
      </div>
    `
  },
}

export default NotFound
