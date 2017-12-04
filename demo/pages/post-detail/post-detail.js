// pages/post-detail/post-detail.js
// var postData = require('../../data/data.js').postList
import postsData from '../../data/data.js';
import { buttonClicked } from '../../comment/conmment.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId : '',
    buttonClicked: false, //防止连点
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    //postId传递
    this.data.postId = postId
    console.log("这是传过来的postID "+postId);
    var postData = postsData.postList[postId];

    // 数据绑定
    this.setData(
      {
        postData : postData,
        buttonClicked: this.data.buttonClicked
      }
    );
    // 收藏状态数据初始读取
    var postsCollected = wx.getStorageSync("posts_collectd");
    console.log(postsCollected)
    // 含有数据
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected : postCollected
      })
    }else {
      // 没有数据
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collectd',postsCollected)
    }
  },
  // 点击收藏
  onCollectionTap(e) {
     //防连点
    buttonClicked(this, 1500);
    var postsCollected = wx.getStorageSync('posts_collectd');
    var postCollected = postsCollected[this.data.postId];
    this.showModal(postCollected, postsCollected)
  },
  //收藏
  showModal(postCollected, postsCollected) {
    wx.showModal({
      title: postCollected ? '确定要取消收藏吗？' : '确定要收藏吗？',
      // content: '这是一个模态弹窗',
      success: res => {
        if (res.confirm) {
          //收藏状态更改
          postCollected = !postCollected;
          console.log("收藏状态值" + postCollected);
          postsCollected[this.data.postId] = postCollected;
          //更新缓存值
          wx.setStorageSync('posts_collectd', postsCollected);
          //更新数据绑定
          this.setData({
            collected: postCollected
          });
          //提示信息
          wx.showToast({
            title: postCollected ? '收藏成功' : '取消收藏'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })     
  },
  onShareTap() {
    let list = [
      '分享到QQ',
      '分享到微信',
      '分享到人人'
    ]
    wx.showActionSheet({
      itemList: list,
      success: function (res) {
        console.log(res.tapIndex)
        wx.showModal({
          title: '用户'+list[res.tapIndex]
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  onMusicTap (e) {
    const isPlayingMusic = this.data.isPlayingMusic;
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    if(isPlayingMusic) {
      console.log('暂停播放')
      backgroundAudioManager.pause();
      
      this.data.isPlayingMusic = false;
    }else{
      backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
      this.data.isPlayingMusic = true;
    }
  }

})