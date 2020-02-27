// pages/singer/singer.js
import api from '../../http/api'

Page({
  // 获取歌手数据
  getArtist(){
    api.getArtist(this.data.cat,this.data.initials).then(res=>{
      console.log(res)
      this.data.artist=res.artists
      this.setData({
        artist:this.data.artist
      })
     
    }).catch(err=>{
      console.log(err)
    })
  },
   item(e){
    //  console.log(e)
    this.data.cat=e.currentTarget.dataset.item.id
    this.setData({
      cat:this.data.cat
    })
    // this.data.lineCtrol=0
    // this.data.initials=''
    this.getArtist()
     // 控制下方线条
    this.data.lineCtrol=e.currentTarget.dataset.index
    this.setData({
      lineCtrol:this.data.lineCtrol
    })
    // 控制ABCD栏在入住歌手消失
    if(this.data.cat =='5001'){
      this.data.flag=false
      this.setData({
        flag:this.data.flag
      })
    
    }else{
      this.data.flag=true
      this.setData({
        flag:this.data.flag
      })
    }
   },
  //  点击字母
   searchArtist(e){
    //  控制文字颜色
    this.data.initCtrol=e.currentTarget.dataset.index
    this.setData({
      initCtrol:this.data.initCtrol
    })
    // ABCD...
    this.data.initials=e.currentTarget.dataset.item
    this.setData({
      initials:this.data.initials
    })
    if(this.data.initials==='热'){
      this.data.initials=''
      this.setData({
        initials:this.data.initials
      })
    }else{
      this.data.initials=e.currentTarget.dataset.item
      this.setData({  
        initials:this.data.initials
      })
    }
    this.getArtist()
  //   let arr =this.data.artist
  //   let arr1=[]
  //   arr1=arr.filter(item=>{
  //     return JSON.stringify(item.name).includes(msg)
  //  })
  //    console.log(arr1)
  
   },
   singerDetail(e){
     console.log(e)
     let id = e.currentTarget.dataset.item.id
     wx.setStorageSync('singerId', id);
     wx.navigateTo({
       url: '../singerDetail/singerDetail',
     });
   },
  /** 
   * 页面的初始数据
   */
  data: {
    initCtrol:0,
    lineCtrol:0,
    flag:false,
    artist:[],
    initials:'',
    initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    cat:5001,
   "typeList": [{
        id: '5001',
        name: '入驻歌手',
    },
    {
        id: '1001',
        name: '华语男歌手',
      
    },
    {
        id: '1002',
        name: '华语女歌手',
      
    },
    {
        id: '1003',
        name: '华语组合/乐队',
       
    },
    {
        id: '2001',
        name: '欧美男歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '2002',
        name: '欧美女歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '2003',
        name: '欧美组合/乐队',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '6001',
        name: '日本男歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '6002',
        name: '日本女歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '6003',
        name: '日本组合/乐队',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '7001',
        name: '韩国男歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '7002',
        name: '韩国女歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '7003',
        name: '韩国组合/乐队',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '4001',
        name: '其他男歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '4002',
        name: '其他女歌手',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        id: '4003',
        name: '其他组合/乐队',
        initial: ["热", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    ],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArtist()
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