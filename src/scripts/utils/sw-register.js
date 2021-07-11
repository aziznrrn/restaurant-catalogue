import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const swRegister = async () => {
  await runtime.register()
}

export default swRegister
