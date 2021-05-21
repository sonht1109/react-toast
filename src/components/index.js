import React from 'react'
import { useDispatch } from 'react-redux'
import { showNotification, showNotificationWithTimeout } from '../redux/actions';

export default function Main() {

  const dispatch = useDispatch()

  const showNotis = () => {
    dispatch(showNotification('Notification'));
  }

  const showNotisWithTimeout = () => {
    dispatch(showNotificationWithTimeout('Notification with timeout'));
  }

  return (
    <div>
      <button onClick={showNotis}>Show notis</button>
      <button onClick={showNotisWithTimeout}>Show notis with timeout</button>
    </div>
  )
}
