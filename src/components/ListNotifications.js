import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../redux/actions'
import './styles.css'

export default function ListNotifications() {

  const notifications = useSelector(state => state.notifications)
  const dispatch = useDispatch()

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <div className="notification" key={n.id} onClick={() => {
          dispatch(hideNotification(n.id))
        }}>
          {n.text}
        </div>
      ))}
    </div>
  )
}
