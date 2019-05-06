const defaultState = {

}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    default:
      return newState
  }
}
