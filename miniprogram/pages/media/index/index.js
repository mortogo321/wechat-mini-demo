Page({
  data: {
    items: [
      { name: 'Image', desc: 'Pick & preview images', url: '/pages/media/image/index' },
      { name: 'Audio', desc: 'Play audio', url: '/pages/media/audio/index' }
    ]
  },
  navigateTo(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
