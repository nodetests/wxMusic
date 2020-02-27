// pages/register/register.js
import api from '../../http/api'
Page({
  telLogin(){
    this.data.flag=0
    this.setData({
      flag:this.data.flag
    })
   },
   emailLogin(){
     this.data.flag=1
     this.setData({
       flag:this.data.flag
     })
   },

  
   captcha(){
    api.captcha(this.data.tel).then(res=>{
     console.log(res)
    }).catch(err=>{
    console.log(err)
    })
   },
   tel(e){
    let phone =e.detail.value
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        this.data.tmsg=2
        this.setData({
          tmsg:this.data.tmsg
        })
    }else{
      this.data.tmsg=0
      this.setData({
        tmsg:this.data.tmsg
      })
        this.data.tel= phone
        this.setData({
          tel:this.data.tel
        })
        console.log(this.data.tel)
    } 
   },
   password(e){
   this.data.password=e.detail.value
   this.setData({
     password:this.data.password
   })
   },
   nickname(e){
     this.data.nickname=e.detail.value
     this.setData({
      nickname:this.data.nickname
     })
   },
   captchas(e){
    this.data.captchas=e.detail.value
    this.setData({
      captchas:this.data.captchas
    })
    console.log(this.data.captchas)
   },
   register(){
     api.ctcode(this.data.tel,this.data.captchas).then(res=>{
       console.log(res)
       if(res.status){
       api.register(this.data.tel,this.data.password,this.data.captchas,this.data.nickname).then(res=>{
           console.log(res)
           wx.setStorageSync(username, this.data.nickname);
         }).catch(err=>{
           console.log(err)
         })
       }
     }).catch(err=>{
       console.log(err)
     })
 
   },
  /**
   * 页面的初始数据
   */
  data: {
    flag:0,
    // 验证码
    captcha:0,
    tel:'',
    password:'',
    nickname:'',
    captchas:'',
    tmsg:0,
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