// 引入SDK核心类
var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    speed: 0,//速度
    accuracy: 16,//位置精准度
    scale: 19,
    longitude: "112.193069",
    latitude:"30.355534",
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 112.193069,
      longitude: 30.355534,
      width: "100%",
      height: "350px"
    }],
    covers: [],
    polyline: [{
      points: [{
        // 112.193069,30.355534
        longitude: 112.193069,
        latitude: 30.355534
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  getlocation: function () {
    // 112.193069,30.355534
    var markers = [{ latitude: 112.193069, longitude: 30.355534, name: '浦东新区', desc: '我的位置' }]
    var covers = [{ latitude: 112.193069, longitude: 30.355534, iconPath: '../images/car.png', rotate: 0 }] 
    this.setData({ longitude: 121.47, latitude: 31.23, markers: markers, covers: covers, })  
  },
  click: function (e) {
    wx.openLocation({
      latitude: 112.193069, 
      longitude: 30.355534,
      scale: 18,
      name: '华乾大厦',
      address: '金平区长平路93号'
    })
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      //SM4BZ-OCUY6-4IZSR-M3EP3-QBWK6-MAF55
      key: 'SM4BZ-OCUY6-4IZSR-M3EP3-QBWK6-MAF55'
    });
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
    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // });
    wx.openLocation({
      // 112.193069,30.355534
      latitude: Number('30.355534'),
      longitude: Number('112.193069')
     
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