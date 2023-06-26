import HttpRequest from '../request/index'

export function getLogs(page, pageCount, optType) {
  return HttpRequest.get('/opt', {
    params: {
      page: page,
      page_count: pageCount,
      opt_type: optType
    }
  })
}