// components/rank/rank.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newRank:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    songPlay(e){
      console.log(e)
      let songId=e.currentTarget.dataset.item.id
      wx.setStorageSync('songId',songId);
      wx.navigateTo({
        url: '../../pages/songPlay/songPlay',
      });
    }
  }
})
