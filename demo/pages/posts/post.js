// pages/posts/post.js
var postData = require('../../data/data.js').postList;
import { buttonClicked } from '../../comment/conmment.js';

Page({
  
  onPostTap(e) {
    //防连点
    buttonClicked(this,500);
    var postId = e.currentTarget.dataset.postid;
    //页面跳转
    wx.navigateTo({
      url: '../post-detail/post-detail?id='+postId,
    })
  },
  onSwiperItem (e) {
    //防连点
    buttonClicked(this, 500);
    console.log(e)
    var postId = e.target.dataset.postid;
    wx.navigateTo({
      url: '../post-detail/post-detail?id=' + postId,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    buttonClicked: false,
    swiperImgUrl:[
      // { url: '/images/1.jpg'},
      // { url: '/images/2.jpg' },
      // { url: '/images/3.jpg' }
      '/images/1.jpg', '/images/2.jpg', '/images/3.jpg'
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //数据绑定
    this.setData({
      post_key:postData
    })
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