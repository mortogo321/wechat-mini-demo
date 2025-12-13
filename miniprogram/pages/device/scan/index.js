Page({
  data: { result: '' },
  scanCode() {
    wx.scanCode({
      success: (res) => this.setData({ result: JSON.stringify(res, null, 2) }),
      fail: (err) => this.setData({ result: 'Error: ' + err.errMsg })
    })
  }
})
