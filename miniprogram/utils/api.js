const app = getApp()

const request = (url, method = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.apiBaseUrl}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: reject
    })
  })
}

const get = (url, params) => request(url, 'GET', params)
const post = (url, data) => request(url, 'POST', data)
const put = (url, data) => request(url, 'PUT', data)
const del = (url) => request(url, 'DELETE')

module.exports = { request, get, post, put, del }
