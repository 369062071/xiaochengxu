export function buttonClicked(self,time) {
  self.setData({
    buttonClicked: true
  })
  console.log('页面已经锁定')
  setTimeout(function () {
    self.setData({
      buttonClicked: false
    });
    console.log('页面已经解锁')
  }, time)
 
}