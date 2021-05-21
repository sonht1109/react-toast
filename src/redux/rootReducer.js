const reducer = (state = {notifications: []}, action) => {
  switch(action.type){

    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      }
    
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      }

    default:
      return {...state}
  }
}

export default reducer