import HttpRequest from '../request/index'

export function getScheduleTask(page, pageCount, collCode, watcherNum) {
  return HttpRequest.get('/schedule', {
    params: {
      page: page,
      page_count: pageCount,
      coll_code: collCode,
      watcher_num: watcherNum
    }
  })
}