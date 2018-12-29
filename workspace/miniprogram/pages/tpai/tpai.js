const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
const APP_ID = "14620636";
const API_KEY = "AarjGgElm77xC3NL7X7VxHGX";
const SECRET_KEY = "2tQhRwjCQjoFI9ry2uCRetg0CDzfnB2P";
var tempFilePath;
var voice = "";
var statu;

//录音的属性配置
const options = {
  duration: 600000,//指定录音的时长，单位 ms
  sampleRate: 16000,//采样率
  numberOfChannels: 1,//录音通道数
  encodeBitRate: 96000,//编码码率
  format: 'mp3',//音频格式，有效值 aac/mp3
  frameSize: 50,//指定帧大小，单位 KB
}

Page({
  api: function() {
      
  },
  play: function () {
    console.log("播放声音文件");
    //播放声音文件  
    innerAudioContext.src = this.tempFilePath,
    innerAudioContext.seek(this.data.playRecord)
    innerAudioContext.play()
  },

  start: function () {
    statu = wx.showLoading({
      title: '倾听中……',
    })
    console.log("开始录音");
    //开始录音  
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
  },

  stop: function () {
    wx.hideLoading(statu)
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.tempFilePath = res.tempFilePath;
      console.log('停止录音', res.tempFilePath)
      const { tempFilePath } = res
      
      //播放声音文件  
      // innerAudioContext.src = this.tempFilePath,
      // innerAudioContext.seek(this.data.playRecord)
      // innerAudioContext.play()

      // 识别语音
      // wx.request({
      //   url: '',
      // })
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

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
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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