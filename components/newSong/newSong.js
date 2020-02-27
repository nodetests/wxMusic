// components/newSong/newSong.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newSong:{
      type:Array
    },
    album:{
      type:Array
    },
    time:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   flag:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    newSongActive(){
      this.data.flag=1
      this.setData({
        flag:this.data.flag
      })
    },
    albumActive(){
      this.data.flag=2
      this.setData({
        flag:this.data.flag
      })
    },
    newsong(){
      wx.navigateTo({
        url: '../../pages/newsongDetail/newsongDetail',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },
    songPlay(e){
      console.log(e)
      let song=e.currentTarget.dataset.item
      wx.setStorageSync('song',song);
      // let songs =wx.getStorageSync('song');
      // console.log(songs)
      wx.navigateTo({
        url: '../../pages/songPlay/songPlay',
      });
    }
  }
})
