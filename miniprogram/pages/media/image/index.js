Page({
  data: { images: [] },
  chooseImage() {
    wx.chooseMedia({
      count: 9, mediaType: ['image'], sourceType: ['album', 'camera'],
      success: (res) => this.setData({ images: res.tempFiles.map(f => f.tempFilePath) })
    })
  },
  previewImage(e) {
    wx.previewImage({ current: e.currentTarget.dataset.src, urls: this.data.images })
  }
})
