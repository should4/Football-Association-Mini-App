// 比赛页面逻辑
Page({
  data: {
    activeTab: 'schedule'  // 默认显示赛程
  },
  switchTab(e) {
    this.setData({
      activeTab: e.currentTarget.dataset.tab  // 根据用户点击切换tab
    });
  }
});
