// pages/catlist/catlist.js
import api from '../../http/api'
Page({
  // 歌单分类
  getHotCatlist(){
    api.getHotCatlist().then(res=>{
      // console.log(res)
      this.data.tid=res.tags[0].id
      this.setData({
        tid:this.data.tid
      })
      console.log(this.data.tid)
    }).catch(err=>{
      console.log(err)
    })
  },
 
    // 推荐页数据
  getRecomlist(){
    api.getRecomlist(1).then(res=>{
      // console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }, 
  getRecommend(){
    api.getRecommend().then(res=>{
      this.data.hotRecommend=res.result
      this.setData({
        hotRecommend:this.data.hotRecommend
      })
      // console.log(this.data.hotRecommend)
    }).catch(err=>{
      console.log(err)
    })
  },
  getCatlistDetail(){
   api.getCatlistDetail(5001).then(res=>{
     console.log(res)
   }).catch(err=>{
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
    lineControl:0,
    hotRecommend:[],
    tid:'',
    arr:[{ids:1,name:'推荐'},{ids:2,name:'官方'},{ids:3,name:'精品'},{ids:4,name:'欧美'},{ids:5,name:'轻音乐'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getHotCatlist()
  this.getRecomlist()
  this.getRecommend()
  this.getCatlistDetail()
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