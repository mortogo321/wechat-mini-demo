Page({
  data: { info: {} },
  onLoad() {
    const info = wx.getSystemInfoSync()
    this.setData({ info })
  }
})
