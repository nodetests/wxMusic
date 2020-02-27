// components/show/show.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   show:{
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
    item(e){
      let id = e.currentTarget.dataset.item.id
      wx.setStorageSync('showId', id);

    wx.navigateTo({
      url: '../../pages/showDetail/showDetail',
    });
    },
  }
})
