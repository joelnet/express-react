const root = '/api'

const fetchJson = (...args) => fetch(...args).then(response => response.json())

export const getMessage = () =>
  fetchJson(`${root}/message`).then(data => data.message)
