import { baseURL } from '../env.js';
import { logger } from '../utils/Logger.js';

// @ts-ignore
// eslint-disable-next-line no-undef
// NOTE always use this instance of axios for the codeworks sandbox API
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

// @ts-ignore
export const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/2014/',
  timeout: 3000
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}