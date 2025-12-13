Page({
  data: {
    date: '2024-01-01',
    time: '12:00',
    region: ['Beijing', 'Beijing', 'Haidian'],
    options: ['Option A', 'Option B', 'Option C'],
    selectedIndex: 0
  },
  onDateChange(e) { this.setData({ date: e.detail.value }) },
  onTimeChange(e) { this.setData({ time: e.detail.value }) },
  onRegionChange(e) { this.setData({ region: e.detail.value }) },
  onPickerChange(e) { this.setData({ selectedIndex: e.detail.value }) }
})
