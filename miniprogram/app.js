App({
  globalData: {
    userInfo: null,
    systemInfo: null,
    apiBaseUrl: 'http://localhost:3000/api'
  },

  onLaunch() {
    this.initSystemInfo()
    this.checkSession()
  },

  initSystemInfo() {
    const systemInfo = wx.getSystemInfoSync()
    this.globalData.systemInfo = systemInfo
  },

  checkSession() {
    wx.checkSession({
      fail: () => {
        this.login()
      }
    })
  },

  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log('Login code:', res.code)
        }
      }
    })
  },

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.globalData.userInfo) {
        resolve(this.globalData.userInfo)
        return
      }
      wx.getUserProfile({
        desc: 'For demo purposes',
        success: (res) => {
          this.globalData.userInfo = res.userInfo
          resolve(res.userInfo)
        },
        fail: reject
      })
    })
  }
})
