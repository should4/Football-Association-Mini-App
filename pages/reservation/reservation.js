Page({
  data: {
    weekDays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'], // 周一到周日
    selectedDayIndex: 0,  // 默认选中周一
    selectedSlot: '',     // 当前选中的场次
  },

  onSelectDay(event) {
    const index = event.currentTarget.dataset.index; // 获取点击的日期索引
    this.setData({
      selectedDayIndex: index  // 更新选中日期
    });
    // 这里可以根据选择的日期更新场地信息
  },

  onSelectSlot(event) {
    const slot = event.currentTarget.dataset.slot; // 获取点击的场次
    this.setData({
      selectedSlot: slot  // 更新当前选中的场次
    });
    // 这里可以更新场地预约状态
  }
});
