Page({
  data: {},
  onReady() { this.drawDemo() },
  drawDemo() {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('#07C160')
    ctx.fillRect(20, 20, 100, 100)
    ctx.setFillStyle('#1989fa')
    ctx.arc(200, 70, 50, 0, 2 * Math.PI)
    ctx.fill()
    ctx.setStrokeStyle('#ff976a')
    ctx.setLineWidth(4)
    ctx.moveTo(300, 20)
    ctx.lineTo(350, 120)
    ctx.lineTo(250, 120)
    ctx.closePath()
    ctx.stroke()
    ctx.setFillStyle('#333')
    ctx.setFontSize(16)
    ctx.fillText('Canvas Demo', 20, 160)
    ctx.draw()
  },
  clearCanvas() {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.draw()
  }
})
