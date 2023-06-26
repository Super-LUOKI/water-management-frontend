import HttpRequest from '../request/index'

export function getRegion(){
  return HttpRequest.get('/region')
}