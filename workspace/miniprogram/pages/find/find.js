const app = getApp()
// 引入SDK核心类
// 引入SDK核心类
var QQMapWX = require('../../pages/libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: "13797521819",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: 'That Girl',
    author: 'Olly Murs',
    src: 'http://fs.w.kugou.com/201809112120/74a77a0890be86171576a1ea0b9c7b12/G083/M02/13/0F/84YBAFglMBOAEqOBACsvZXO7De4868.mp3',
    mode: 'scaleToFill',
    show1: '../images/111.png',
    show2: '../images/222.jpg',
    show3: '../images/333.jpg',
    show4: '../images/444.jpg',
    show5: '../images/555.jpg',
    location:""
  },
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  addressCall : function () {
    wx.openLocation({
      // 112.193069,30.355534
      longitude: Number('112.186241'),
      latitude: Number('30.34977'),
      name: "桦洋课堂",
      address: "荆州市荆州区郢都路27号长江大学文理学院",
      scale: 15
    })
    // 实例化API核心类
    // var demo = new QQMapWX({
    //   key: 'SM4BZ-OCUY6-4IZSR-M3EP3-QBWK6-MAF55' // 必填
    // });
    // 调用接口
    // demo.geocoder({
    //   address: '湖北省荆州市荆州区长江大学文理学院',
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
    // 调用接口
    // demo.reverseGeocoder({
    //   location: {
    //     latitude: 112.193069,
    //     longitude: 30.355534
    //   },
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
  },
     
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
