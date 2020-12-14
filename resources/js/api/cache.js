import LRU from 'lru-cache'
import buildURL from 'axios/lib/helpers/buildURL'

const cacheOptions = {
  max: 50,
  maxAge: 10e3
}
const cache = new LRU(cacheOptions)

export default cache

export function applyCacheResuest (config) {
  if (config.method === 'get' && config.cacheable) {
    let url = buildURL(config.url, config.params)
    const cached = cache.get(url)
    if (cached) {
      config.adapter = () => {
        return Promise.resolve({
          data: cached.data,
          status: cached.status,
          statusText: cached.statusText,
          headers: cached.headers,
          config: config,
          request: config,
          __fromCache: true
        })
      }
    }
  }
  return config
}

export function applyCacheResponse (response) {
  const config = response.config
  if (config.method === 'get' && config.cacheable && !response.__fromCache) {
    const url = buildURL(config.url, config.params)
    cache.set(url, {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    }, config.cacheMaxAge)
  }
  return response
}
