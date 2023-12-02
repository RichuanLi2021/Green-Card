const getAPI_URL = () => {
  if (process.env.NODE_ENV.toLowerCase() === 'development') {
    if (process.env.REACT_APP_DEV_API_URL === null) {
      console.log('\nNO `REACT_APP_DEV_API_URL` DEFINED\n')
      return null
    }
    return process.env.REACT_APP_DEV_API_URL
  }
  else if (process.env.NODE_ENV.toLowerCase() === 'production') {
    if (process.env.REACT_APP_PROD_API_URL === null) {
      console.log('\nNO `REACT_APP_PROD_API_URL` DEFINED\n')
      return null
    }
    return process.env.REACT_APP_PROD_API_URL
  }

  console.log('\nNO NODE_ENV DEFINED\n')
  return null
}

const config = {
  API_URL: getAPI_URL()
}

export default config