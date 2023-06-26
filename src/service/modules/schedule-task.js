import HttpRequest from '../request/index'

export function getScheduleTask(page, pageCount, watcherNum) {
  return HttpRequest.get('/schedule', {
    params: {
      page: page,
      page_count: pageCount,
      watcher_num: watcherNum
    }
  })
}