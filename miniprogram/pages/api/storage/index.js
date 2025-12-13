Page({
  data: { key: 'testKey', value: '', storedValue: '' },
  onLoad() { this.getStorage() },
  onInputKey(e) { this.setData({ key: e.detail.value }) },
  onInputValue(e) { this.setData({ value: e.detail.value }) },
  setStorage() {
    wx.setStorageSync(this.data.key, this.data.value)
    wx.showToast({ title: 'Saved!', icon: 'success' })
    this.getStorage()
  },
  getStorage() {
    const val = wx.getStorageSync(this.data.key) || '(empty)'
    this.setData({ storedValue: val })
  },
  clearStorage() {
    wx.removeStorageSync(this.data.key)
    wx.showToast({ title: 'Cleared!', icon: 'success' })
    this.getStorage()
  }
})
