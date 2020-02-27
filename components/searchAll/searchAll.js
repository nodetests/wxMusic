// components/searchAll/searchAll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchAll:{
      type:JSON
    },
    interest:{
      type:JSON
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     songid:1,
     ablumid:2,
     artistid:3,
     playListid:4,
     userid:5,
     mvid:6,
     djid:7,
     video:8,
      //{id:1,name:"单曲"},{id:10,name:"专辑"},{id:100,name:"歌手"},{id:1000,name:"歌单"},{id:1002,name:"用户"},{id:1004,name:"MV"},{id:1009,name:"电台"},{id:1014,name:"视频"}],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    songOne(){
       this.triggerEvent('songOne',this.data.songid)
    },
    palyList(){
      this.triggerEvent('palyList',this.data.playListid)
   },
   video(){
    this.triggerEvent('video',this.data.videoid)
   },
   artist(){
    this.triggerEvent('artist',this.data.artistid)
   },
   ablum(){
    this.triggerEvent('ablum',this.data.ablumid)
   },
   djRadio(){
    this.triggerEvent('djRadio',this.data.djid)
   },
   user(){
    this.triggerEvent('user',this.data.userid)
   },
   mlog(){
    this.triggerEvent('mlog',this.data.mvid)
   },
   
   
  }
})
