//index.js
//获取应用实例
var app = getApp()


Page({

  // 可选参数1： 页面初始化数据
  data: {
    motto: '欢迎来看直播',
    userInfo: {},
    city: ''
  },

  // 可选参数2：页面加载
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  // 可选参数3： 监听页面初次渲染完成
  onReady: () => {
    console.log('index#OnReady() ');
  },

  // 可选参数4： 监听页面显示
  onShow: () => {
    console.log('index#onShow()');
  },

  // 可选参数5： 监听页面隐藏
  onHide: () => {
    console.log('index#onHide()');
  },

  // 可选参数6: 监听页面卸载
  onUnload: () => {
    console.log('index#onUnload()');
  },

  // 可选参数7：监听用户下拉动作
  onPullDownRefresh: () => {
    console.log('index#onPullDownRefresh()');
  },

  // 可选参数8：监听用户上拉触底事件
  onReachBottom: () => {
    console.log("index#onReachBottom()");
  },
  
  // 其他任意事件
  // tap事件处理函数
  bindViewTap: () => {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  showCity: function() {
    let that = this;
    this.setData({
      city: that.data.userInfo.city
    });
  }

});
