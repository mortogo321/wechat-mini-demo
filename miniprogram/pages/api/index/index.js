Page({
  data: {
    apis: [
      { name: 'Network Request', desc: 'wx.request demo', url: '/pages/api/request/index' },
      { name: 'Storage', desc: 'Local storage demo', url: '/pages/api/storage/index' }
    ]
  },
  navigateTo(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
