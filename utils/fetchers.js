import fetch from 'isomorphic-unfetch'

export const fetcherWithToken = (url, token) => fetch(url, {
  headers: { Authorization: `Bearer ${token}` }
}).then(r => r.json())

export const fetcher = url => fetch(url).then(r => r.json())