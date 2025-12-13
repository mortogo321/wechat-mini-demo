Page({
  data: { location: null },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => this.setData({ location: res }),
      fail: (err) => wx.showToast({ title: err.errMsg, icon: 'none' })
    })
  },
  openMap() {
    if (!this.data.location) return wx.showToast({ title: 'Get location first', icon: 'none' })
    wx.openLocation({ ...this.data.location, scale: 18, name: 'Current Location' })
  },
  goToMap() { wx.navigateTo({ url: '/pages/location/map/index' }) }
})
