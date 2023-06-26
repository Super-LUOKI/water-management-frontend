import HttpRequest from '../request/index'

export function getCost(regionId, page, pageCount, username, usercode) {
  return HttpRequest.get('/cost', {
    params: {
      region_id: regionId,
      page: page,
      page_count: pageCount,
      user_name: username,
      user_code: usercode
    }
  })
}