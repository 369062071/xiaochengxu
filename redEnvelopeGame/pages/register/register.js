// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ['先生', '女士'],
    showPick: 0,
    uName:'',
    uSex:''
  },
  pickTap () {
    let _showPick = this.data.showPick++
    this.setData({
      showView: _showPick
    })
    console.log(this.data.showPick)
  },
  // 选择性别
  selectItemTap (e) {
    let currentSex = e.currentTarget.dataset.text
    console.log(e)
    let _showPick = this.data.showPick++
    this.data.submitSex = currentSex
    this.setData({
      sexPick: currentSex,
      showView: _showPick
    })
  },
  // getUserName (e) {
  //   this.setData({
  //     uName: e.detail.value.uName
  //   })
  // },
  getIptVal (e) {
    console.log(e)
    this.setData({
      uName: e.detail.value
    })
  },
  getUsex (e) {
    this.data.uSex = e.currentTarget.dataset.text;
    console.log(this.data.uSex)
  },
  submitTap () {
    let uName = this.data.uName
    
    let uSex = this.data.uSex
  
    console.log('贵姓：', uName, uSex)
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