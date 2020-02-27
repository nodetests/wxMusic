import api from "../../http/api"

// pages/showDetail/showDetail.js

Page({
  getdjDetail(){
   api.getdjDetail(this.data.id).then(res=>{
     console.log(res)
     this.data.dj=res.djRadio
     this.setData({
       dj:this.data.dj
     })
     console.log(this.data.dj)
    this.data.count=res.djRadio.subCount
    let counts = parseFloat(res.djRadio.subCount/10000).toFixed(1)
    this.data.count=counts
    this.setData({
      count:this.data.count
    })
    this.data.comments=res.djRadio.commentDatas
    this.setData({
      comments:this.data.comments
    })
    console.log(this.data.comments)
   }).catch(err=>{
     console.log(err)
   })
  },
  tagSwitch1(){
    this.data.tagSwitch=0
    this.setData({
      tagSwitch:this.data.tagSwitch
    })
  },
  tagSwitch2(){
    this.data.tagSwitch=1
    this.setData({
      tagSwitch:this.data.tagSwitch
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    
   id:'',
   dj:{},
   count:0,
   tagSwitch:0,
   comments:[],
   play:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id=wx.getStorageSync('showId');
    this.getdjDetail()
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