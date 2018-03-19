import fetch from '@/utils/fetch'

//文章列表
export function articles(limit,offset,category,tag,archive) {
  return fetch({
    method: 'get',
    url: '/blog/articles/',
    params: {limit,offset,category,tag,archive}
  })
}

//文章详情
export function articleDetail(slug) {
  return fetch({
    method: 'get',
    url: `/blog/articles/${slug}`
  })
}

//文章标签列表
export function tags() {
  return fetch({
    method: 'get',
    url: `/blog/tags/`
  })
}

//文章类别列表
export function categories() {
  return fetch({
    method: 'get',
    url: `/blog/category/`
  })
}

//博文归档
export function archives() {
  return fetch({
    method: 'get',
    url: `/blog/articles/archive/`
  })
}