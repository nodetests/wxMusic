// components/recommendSing/recommendSing.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotRecommend:{
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
    more(){
      wx.navigateTo({
        url: '../../pages/catlist/catlist',
      });
    }
  }
})
