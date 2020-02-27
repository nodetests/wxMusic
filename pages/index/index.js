import api from "../../http/api"
Page({
  getBanners(){
    api.getBanners().then(res=>{
      // console.log(res)
      this.data.banners= res.banners
      this.setData({
        banners:this.data.banners
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  getRecommend(){
    api.getRecommend().then(res=>{
      console.log(res)
      let arr=[]
      for(let i=0;i<6;i++){
        arr.push(res.result[i])
      }  
      this.data.hotRecommend=arr
      this.setData({
        hotRecommend:this.data.hotRecommend
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  getNewsong(){
    wx.showLoading({
      title: '加载资源中',
    });
    api.getNewsong().then(res=>{
      wx.hideLoading();
      // console.log(res)
      let arr=[]
      for(let i=0;i<6;i++){
        arr.push(res.data[i])
      }  
      // console.log(arr)
      this.data.newSong=arr
      this.setData({
        newSong:this.data.newSong
      })
    }).catch(err=>{
      wx.hideLoading();
     console.log(err)
    })
  },
  getAblum(){
    api.getAlbum().then(res=>{
      // console.log(res)
      let arr=[]
      for(let i=0;i<6;i++){
        arr.push(res.albums[i])
      }  
      this.data.album=arr
      this.setData({
        album:this.data.album
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  getDate(){
    let date = new Date()
    let month = date.getMonth()
    let day =date.getDate() 
    this.data.time=month+'月'+day+'日'
    this.setData({
      time:this.data.time 
    })
    console.log(this.data.time)
  },
  getnewRank(){
    api.getnewRank().then(res=>{
      // console.log(res)
      let arr=[]
      for(let i=0;i<3;i++){
        arr.push(res.playlist.tracks[i])
      }  
      this.data.newRank=arr
      this.setData({
        newRank:this.data.newRank
      })
      console.log(this.data.newRank)
    }).catch(err=>{
      console.log(err)
    })
  },
  getShow(){
    api.getShow().then(res=>{
      console.log(res)
      this.data.show=res.data
      this.setData({
        show:this.data.show
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  searchSwitch(){
     this.data.searchFlag=1
     this.setData({
       searchFlag:this.data.searchFlag
     })
  },
  search(e){
  // console.log(e)
  this.data.keywords=e.detail.value
  this.setData({
    keywords:this.data.keywords
  })
  console.log(this.data.keywords)
      api.getSearchRecomment(this.data.keywords).then(res=>{
        // console.log(res)
        this.data.searchRecomment=res.result.allMatch
        this.setData({
          searchRecomment:this.data.searchRecomment
        })
       console.log(this.data.searchRecomment)
      }).catch(err=>{
        console.log(err)
      })
   if(e.detail.value===''){
    this.data.searchRecomment=[]
    this.setData({
      searchRecomment:this.data.searchRecomment
    })
   }
  },
  confirmSearch(){
    this.data.recommentSwitch=1
    this.setData({
      recommentSwitch:this.data.recommentSwitch
    })
    api.getSearch(this.data.keywords,this.data.type).then(res=>{
      console.log(res)
      this.data.searchAll=res.result
      this.setData({
        searchAll:this.data.searchAll
      })
      api.getMultimatch(this.data.keywords).then(res=>{
        // console.log(res)
      this.data.interest=res.result
      this.setData({
        interest:this.data.interest
      })
      // console.log(this.data.interest)
      }).catch(err=>{
        console.log(err)
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  item(e){
    this.data.lineControl=e.currentTarget.dataset.index
    this.setData({
      lineControl:this.data.lineControl
    })
    let index =this.data.lineControl
    this.data.type=this.data.arr[index].id
    this.confirmSearch()
    // this.data.searchAll=res.result
    // this.setData({
    //   searchAll:this.data.searchAll
    // })
  },
  songOne(e){
    this.data.lineControl=e.detail
    this.setData({
      lineControl:this.data.lineControl
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    interest:{},
    searchAll:{},
    type:1018,
    lineControl:0,
    banners:[],
    hotRecommend:[],
    time:'',
    newSong:[],
    album:[],
    show:[],
    newRank:[],
    searchFlag:0,
    recommentSwitch:0,
    keywords:'',
    searchRecomment:[],
    arr:[{id:1018,name:"综合"},{id:1,name:"单曲"},{id:10,name:"专辑"},{id:100,name:"歌手"},{id:1000,name:"歌单"},{id:1002,name:"用户"},{id:1004,name:"MV"},{id:1009,name:"电台"},{id:1014,name:"视频"}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanners()
    this.getRecommend()
    this.getDate()
    this.getNewsong()
    this.getAblum()
    this.getShow()
    this.getnewRank()
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