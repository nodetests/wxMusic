// pages/newsongDetail/newsongDetail.js
import api from '../../http/api'
Page({
  getNewsong(){
    wx.showLoading({
      title: '加载资源中',
    });
    api.getNewsong().then(res=>{
      wx.hideLoading();
      this.data.newSong=res.data
      this.setData({
        newSong:this.data.newSong
      })
      console.log(this.data.newSong)
    }).catch(err=>{
      wx.hideLoading();
     console.log(err)
    })
  },
  item(e){
    this.data.lineControl=e.currentTarget.dataset.index
    this.setData({
      lineControl:this.data.lineControl
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
   newSong:[],
   arr:[{ids:1,name:'推荐'},{ids:2,name:'华语'},{ids:3,name:'欧美'},{ids:4,name:'韩国'},{ids:5,name:'日本'}],
   lineControl:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getNewsong()
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