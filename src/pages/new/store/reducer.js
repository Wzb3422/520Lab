const defaultState = {
  options: ['你是不是龙鸣', '你可别被我逮住了哈哈哈哈哈哈哈哈', '喜欢这种感觉吗妹妹', '吸鼠爸王']
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    default:
      return newState
  }
}
