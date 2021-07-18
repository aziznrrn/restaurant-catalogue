const swRegister = async () => {
  await import('serviceworker-webpack-plugin/lib/runtime').then(({ register }) => {
    register()
  })
}

export default swRegister
