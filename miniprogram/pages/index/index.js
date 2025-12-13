Page({
  data: {
    features: [
      { id: 'components', name: 'UI Components', icon: '🎨', desc: 'Button, Form, Picker, Swiper', url: '/pages/components/index/index' },
      { id: 'api', name: 'API Demo', icon: '🔌', desc: 'Request, Storage, Login', url: '/pages/api/index/index' },
      { id: 'device', name: 'Device', icon: '📱', desc: 'System Info, Scan, Clipboard', url: '/pages/device/index/index' },
      { id: 'media', name: 'Media', icon: '🎬', desc: 'Image, Audio, Camera', url: '/pages/media/index/index' },
      { id: 'location', name: 'Location', icon: '📍', desc: 'GPS, Map', url: '/pages/location/index/index' },
      { id: 'canvas', name: 'Canvas', icon: '🖼️', desc: 'Drawing, Animation', url: '/pages/canvas/index/index' }
    ]
  },

  onLoad() {
    this.getSystemInfo()
  },

  getSystemInfo() {
    const info = wx.getSystemInfoSync()
    this.setData({
      systemInfo: `${info.brand} ${info.model} | ${info.system}`
    })
  },

  navigateTo(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  }
})
