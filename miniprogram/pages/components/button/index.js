Page({
  data: {
    loading: false
  },

  handleTap() {
    wx.showToast({ title: 'Button tapped!', icon: 'success' })
  },

  handleLoading() {
    this.setData({ loading: true })
    setTimeout(() => this.setData({ loading: false }), 2000)
  },

  handleShare() {
    wx.showToast({ title: 'Share clicked', icon: 'none' })
  },

  handleContact() {
    wx.showToast({ title: 'Contact clicked', icon: 'none' })
  }
})
