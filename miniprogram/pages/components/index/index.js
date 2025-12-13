Page({
  data: {
    components: [
      { name: 'Button', desc: 'Various button styles', url: '/pages/components/button/index' },
      { name: 'Form', desc: 'Input, Textarea, Checkbox', url: '/pages/components/form/index' },
      { name: 'Picker', desc: 'Date, Time, Region picker', url: '/pages/components/picker/index' },
      { name: 'Swiper', desc: 'Carousel & Slides', url: '/pages/components/swiper/index' }
    ]
  },

  navigateTo(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url })
  }
})
