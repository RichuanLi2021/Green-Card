const getAPI_URL = () => {
  if (process.env.NODE_ENV.toLowerCase() === 'development') return process.env.REACT_APP_DEV_API_URL
  else if (process.env.NODE_ENV.toLowerCase() === 'production') return process.env.REACT_APP_PROD_API_URL
  return null
}

const config = {
  API_URL: getAPI_URL()
}

export default config