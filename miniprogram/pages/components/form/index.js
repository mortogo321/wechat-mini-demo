Page({
  data: {
    inputValue: '',
    textareaValue: '',
    checked: false,
    switchValue: false,
    sliderValue: 50
  },

  onInputChange(e) {
    this.setData({ inputValue: e.detail.value })
  },

  onTextareaChange(e) {
    this.setData({ textareaValue: e.detail.value })
  },

  onCheckboxChange(e) {
    this.setData({ checked: e.detail.value.length > 0 })
  },

  onSwitchChange(e) {
    this.setData({ switchValue: e.detail.value })
  },

  onSliderChange(e) {
    this.setData({ sliderValue: e.detail.value })
  },

  onSubmit() {
    wx.showToast({ title: 'Form submitted!', icon: 'success' })
  }
})
