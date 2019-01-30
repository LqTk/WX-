// pages/shoppingDetail/shoppingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    latitude: '',
    logo: '',
    longitude: '',
    mapId: '',
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (options != null) {
      this.setData({
        id: options.id,
        latitude: options.latitude,
        longitude: options.longitude,
        logo: options.logo,
        mapId: options.mapId,
        name: options.name
      })
      console.log(this.data.name + "商品详情")
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
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