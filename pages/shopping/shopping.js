// pages/shoping/shopping.js
var datajson = require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    type:4,
    dataListRes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '全部商品',
    })
    this.getList(datajson.dataListData)
  },

  getList:function(json){
    var that = this;
    that.cjson = [];
    json.forEach(function(val,i){
      var tobj = {
        goods_id: val.goods_id,
        goods_title: val.goods_title,
        goods_img: val.goods_img,
        goods_price: val.goods_price,
        goods_xiaoliang: val.goods_xiaoliang
      }
      that.cjson.push(tobj);
    })
    that.setData({ dataList: that.cjson });
    that.post()
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

  },

  post:function(){
    var that = this;
    that.cjson = [];
    wx.request({
      url: 'https://xz.parkbobo.com/location/locMapZone/v1/findByType?',
      method:'POST',
      data:{
        type: that.data.type
      },
      header:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(JSON.stringify(res.data));
        if(res.data.status){
          res.data.data.forEach(function(rdata,i){
            var tobj = {
              id: rdata.id,
              latitude: rdata.latitude,
              logo: rdata.logo,
              longitude: rdata.longitude,
              mapId: rdata.mapId,
              name: rdata.name,
              typeName: rdata.typeName
            }
            that.cjson.push(tobj);
          })
          that.setData({dataListRes:that.cjson})
          console.log(that.data.dataListRes)
        }
      }
    })
  },
  toDetail:function(id){
    var data = id.currentTarget.dataset;
    console.log(id.currentTarget.dataset.id+"传参")
    wx.navigateTo({
      url: '../shoppingDetail/shoppingDetail?id=' + data.id + '&latitude=' + data.latitude + '&logo=' + data.logo + '&longitude=' + data.longitude + '&mapId=' + data.mapId + '&name=' + data.name
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setNavigationBarTitle({
      title: '加载中',
    })
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