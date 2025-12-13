const audioCtx = wx.createInnerAudioContext()
Page({
  data: { playing: false, duration: 0, currentTime: 0 },
  onLoad() {
    audioCtx.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    audioCtx.onTimeUpdate(() => this.setData({ currentTime: Math.floor(audioCtx.currentTime), duration: Math.floor(audioCtx.duration) }))
    audioCtx.onEnded(() => this.setData({ playing: false }))
  },
  togglePlay() {
    if (this.data.playing) { audioCtx.pause() } else { audioCtx.play() }
    this.setData({ playing: !this.data.playing })
  },
  onUnload() { audioCtx.destroy() }
})
