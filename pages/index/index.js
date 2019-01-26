//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //存储计时器
    setInter:'',
    num:1,
  },
  //事件处理函数
  startSetInter: function() {
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function(){
        var numVal = that.data.num+1;
        that.setData({num:numVal});
        console.log('setInterVal=='+that.data.num);
      }
    ,1000);
  },
  onLoad: function () {
    var that = this;
  },
  endSetInter:function(){
    var that = this;
    //清除计时器 即清除setInter
    that.setData({num:0});
    clearInterval(that.data.setInter)
  },
  onUnload:function(){
    var that = this;
    that.setData({ num: 0 });
    clearInterval(that.data.setInter)
  },
  seeNowDate:function(){
    wx.navigateTo({
      url: '../nowDate/nowdate',
    })
  },
  startScan:function(){
    wx.navigateTo({
      url: '../scan/scan',
    })
  }
})
