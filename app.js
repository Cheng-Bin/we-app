//app.js
App({

  // 监听小程序初始化
  onLaunch:  () => {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  
  //监听小程序启动或从后台进入前台显示
  onShow: () => {
    console.log('onShow()');
  },

  //监听小程序从前台进入后台
  onHide: () => {
    console.log('onHide()');
  },

  getUserInfo: function(cb) {
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },


  globalData:{
    userInfo:null
  }

})