import HttpRequest from '../request/index'

export function getFlow(regionId, page, pageCount, deviceCode) {
  return HttpRequest.get('/flow', {
    params: {
      region_id: regionId,
      page: page,
      page_count: pageCount,
      device_code: deviceCode
    }
  })
}