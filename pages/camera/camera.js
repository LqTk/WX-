// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctx:'',
    inter:'',
    showView:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '摄像机',
    })
    this.ctx = wx.createCameraContext();
    wx.authorize({
      scope: 'scope.camera',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  takePhoto: function () {
    var that = this;
      that.ctx.takePhoto({
        quality: 'high',
        success: function (res) {
          that.setData({
            src: res.tempImagePath
          });
          wx.showToast({
            title: '拍照完成', duration: 1000
          })
        }
      })
  },
  startRecord:function(){
    var that = this;
    that.data.inter = setInterval(function(){
      var isshow = that.data.showView;
      if(isshow){
        isshow = false;
      }else{
        isshow = true;
      }
      that.setData({ showView: isshow})
    },1000)
    that.ctx.startRecord({
      success:(res)=>{
        console.log('startRecord')
      }
    })
  },
  stopRecord:function(){
    clearInterval(this.data.inter);
    this.ctx.stopRecord({
      success:(res)=>{
        this.setData({
          src:res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
    this.setData({showView:false})
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})