Page({
  data: { latitude: 39.908823, longitude: 116.397470, markers: [] },
  onLoad() {
    this.setData({
      markers: [{ id: 1, latitude: 39.908823, longitude: 116.397470, title: 'Beijing' }]
    })
  },
  moveToLocation() {
    const mapCtx = wx.createMapContext('myMap')
    mapCtx.moveToLocation()
  }
})
