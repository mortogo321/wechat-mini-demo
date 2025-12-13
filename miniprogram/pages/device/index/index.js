Page({
  data: {
    items: [
      { name: 'System Info', desc: 'Device information', url: '/pages/device/system-info/index' },
      { name: 'Scan QR Code', desc: 'Scan barcode/QR', url: '/pages/device/scan/index' }
    ]
  },
  navigateTo(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
