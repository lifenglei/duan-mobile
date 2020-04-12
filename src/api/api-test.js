import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/api/Zhihu/zhihu_daily',
    method: 'get',
    data,
  })
}
