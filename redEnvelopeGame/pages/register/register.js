// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ['先生', '女士'],
    showPick: 0,
    isShowSubmit: false,
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
  formSubmit (e) {
    let reqData = e.detail.value;
    for (let key in reqData) {
      if (reqData[key] === '' || reqData[key] === void 0) {
        wx.showModal({
          title: '提示',
          content: '请输入正确的姓名',
          success: (res) => {
            if (res.confirm) {
              wx.redirectTo({
                url: '/pages/myCenter/mycenter'
              })
            }
          }
        })
        return
      }
    }
    console.log('form发生了submit事件，携带数据为：', reqData)
    
  },
  submitShowTap () {
    let _isShowSubmit = !this.data.isShowSubmit
    this.setData({
      isShowSubmit: _isShowSubmit
    })
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