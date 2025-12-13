Page({
  data: { result: '', loading: false },
  doGet() {
    this.setData({ loading: true })
    wx.request({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      success: (res) => this.setData({ result: JSON.stringify(res.data, null, 2) }),
      fail: (err) => this.setData({ result: 'Error: ' + err.errMsg }),
      complete: () => this.setData({ loading: false })
    })
  },
  doPost() {
    this.setData({ loading: true })
    wx.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: { title: 'Test', body: 'Hello', userId: 1 },
      success: (res) => this.setData({ result: JSON.stringify(res.data, null, 2) }),
      fail: (err) => this.setData({ result: 'Error: ' + err.errMsg }),
      complete: () => this.setData({ loading: false })
    })
  }
})
