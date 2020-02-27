import api from "../../http/api";

// pages/singerDetail/singerDetail.js
Page({
 
// 歌手歌曲
  getSingerDetail(){
    api.getArtists(this.data.id).then(res=>{
      // console.log(res)
    //  公共部分
    this.data.art=res.artist
    this.setData({
      art:this.data.art
    })
      // 歌手主页
      let arr=res.hotSongs 
      let arr1 =arr.filter((item,index)=>{
       return index<3
     })
      // console.log(arr1)
      this.data.mainHotsong=arr1
      this.setData({
        mainHotsong:this.data.mainHotsong
      })
      // console.log(this.data.mainHotsong)
      this.data.main=res.artist
      this.setData({
        main:this.data.main
      })
      // console.log(this.data.main)
       // tag歌曲页面
       this.data.artSong=res.hotSongs
       this.setData({
        artSong:this.data.artSong
       })
      //  console.log(this.data.artSong)
    }).catch(err=>{
      console.log(err)
    })
  },
  // 专辑
  getArtistalbum(){
    api.getArtistalbum(this.data.id).then(res=>{
      // console.log(res)
      this.data.ablum=res.hotAlbums
      this.setData({
        ablum:this.data.ablum
      })
    }).catch(err=>{
      console.log(err)
    })
  },
   // MV
   getArtistmv(){
    api.getArtistmv(this.data.id).then(res=>{
      console.log(res)
      this.data.mv=res.mvs
      this.setData({
        mv:this.data.mv
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  //歌手信息
  getArtistdesc(){
    api.getArtistdesc(this.data.id).then(res=>{
      // console.log(res)
    
    }).catch(err=>{
      console.log(err)
    })
  },
  item(e){
  //  console.log(e)
   this.data.flag=e.currentTarget.dataset.index
   this.setData({
     flag:this.data.flag
   })
  },
  /**
   * 页面的初始数据
   */
  data: {
   arr:[{ids:1,name:'主页'},{ids:2,name:'歌曲'},{ids:3,name:'专辑'},{ids:4,name:'视频'},{ids:5,name:'动态'}],
  //  控制tag切换
   flag:0,
  //  获取歌手id
   id:'',
  // 主页
  main:{},
  mainHotsong:[],
  // 歌曲页面
   artSong:[],
   mv:[],
   ablum:[],
  
   art:[],
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.data.id=wx.getStorageSync('singerId');
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
   this.getSingerDetail()
   this.getArtistdesc()
   this.getArtistalbum()
   this.getArtistmv()
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