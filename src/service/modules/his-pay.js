import HttpRequest from '../request/index'

// 开始事件和结束事件为时间戳
export function getHisPays(page, pageCount, address, deviceCode, userCode, username, startTimestamp, endTimestamp) {
  return HttpRequest.get('/hispay', {
    params: {
      page: page,
      page_count: pageCount,
      address: address,
      device_code: deviceCode,
      user_code: userCode,
      username: username,
      start_time: startTimestamp,
      end_time: endTimestamp
    }
  })
}