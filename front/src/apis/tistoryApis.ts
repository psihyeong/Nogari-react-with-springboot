import { axAuth } from './axiosInstance'

// 블로그명과 카테고리 조회를 위한 api
export async function postTistoryCategory() {
  const response = await axAuth.post(`/contents/tistory`, {
    lastTistoryId: -1,
    pageSize: 1,
  })
  return response
}

// 전체 포스트 리스트 조회를 위한 api

export async function postTistoryPostList() {
  const response = await axAuth.post(`/contents/tistory`, {
    lastTistoryId: -1,
    pageSize: 100,
  })
  return response
}
// tistory 발행 api
