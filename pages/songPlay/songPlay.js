// pages/songPlay/songPlay.js
import api from '../../http/api'
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({
  getSongurl(){
    api.getSongurl(this.data.id).then(res=>{
      console.log(res)
      this.data.url=res.data[0].url
      this.setData({
        url:this.data.url
      })
    }).catch(err=>{
      console.log(err)
    })
  },

  // getSongdetail(){
  //   api.getSongdetail(this.data.id).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // },
  plays(){
    this.data.playFlag=1
    this.setData({
      playFlag:this.data.playFlag
    })
  },
  pause(){
    this.data.playFlag=0
    this.setData({
      playFlag:this.data.playFlag
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
   songs:{},
   id:'',
   url:'',
   bgImg:'',
   playFlag:0,
   modelFlag:0,
   songName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let songs=wx.getStorageSync('song');
    this.data.songs=songs
    this.setData({
      songs:this.data.songs
    })
    console.log(this.data.songs)
    this.data.id =songs.id
    this.setData({
      id:this.data.id
    })
    this.data.bgImg=songs.album.blurPicUrl
    this.setData({
      bgImg:this.data.bgImg
    })
    this.data.songName=songs.name
    this.setData({
      songName:this.data.songName
    })
    this.getSongurl()
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
    backgroundAudioManager.src=this.data.url
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